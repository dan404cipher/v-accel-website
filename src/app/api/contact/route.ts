import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

// Google Sheets API configuration
const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID || "";
const RANGE = "Sheet1!A:G"; // Adjust range based on your columns

// Initialize Google Sheets API
async function getGoogleSheetsClient() {
  try {
    // Using Service Account (Recommended for server-side)
    if (
      process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
      process.env.GOOGLE_PRIVATE_KEY
    ) {
      const auth = new google.auth.JWT({
        email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      });

      const sheets = google.sheets({ version: "v4", auth });
      return sheets;
    }

    throw new Error(
      "Google Sheets credentials not configured. Please set GOOGLE_SERVICE_ACCOUNT_EMAIL and GOOGLE_PRIVATE_KEY in your environment variables."
    );
  } catch (error) {
    console.error("Error initializing Google Sheets client:", error);
    throw error;
  }
}

export async function POST(request: NextRequest) {
  try {
    // Validate configuration
    if (!SPREADSHEET_ID) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Service configuration error. Please contact the administrator.",
        },
        { status: 500 }
      );
    }

    const formData = await request.json();

    // Add timestamp
    const submissionData = {
      name: formData.name || "",
      email: formData.email || "",
      company: formData.company || "",
      phone: formData.phone || "",
      subject: formData.subject || "",
      message: formData.message || "",
      timestamp: new Date().toISOString(),
    };

    // Get Google Sheets client
    const sheets = await getGoogleSheetsClient();

    // Prepare data row (matching the range columns)
    const values = [
      [
        submissionData.timestamp,
        submissionData.name,
        submissionData.email,
        submissionData.company,
        submissionData.phone,
        submissionData.subject,
        submissionData.message,
      ],
    ];

    // Append data to the sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: RANGE,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: values,
      },
    });

    // If this is the first row, add headers
    try {
      const headerCheck = await sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: "Sheet1!A1:G1",
      });

      if (!headerCheck.data.values || headerCheck.data.values.length === 0) {
        // Add headers
        await sheets.spreadsheets.values.update({
          spreadsheetId: SPREADSHEET_ID,
          range: "Sheet1!A1:G1",
          valueInputOption: "USER_ENTERED",
          requestBody: {
            values: [
              [
                "Timestamp",
                "Name",
                "Email",
                "Company",
                "Phone",
                "Subject",
                "Message",
              ],
            ],
          },
        });
      }
    } catch (headerError) {
      // If headers already exist, that's fine
      console.log("Headers check:", headerError);
    }

    return NextResponse.json(
      { success: true, message: "Form submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error saving to Google Sheets:", error);

    // Log full error for debugging (server-side only)
    if (error instanceof Error) {
      console.error("Error details:", {
        message: error.message,
        stack: error.stack,
      });
    }

    // User-friendly error messages
    let userMessage = "Failed to submit form. Please try again later.";

    if (error instanceof Error) {
      const errorMsg = error.message.toLowerCase();

      // Authentication/credential errors
      if (
        errorMsg.includes("decoder") ||
        errorMsg.includes("private key") ||
        errorMsg.includes("invalid key")
      ) {
        userMessage =
          "Server configuration error. Please contact the administrator.";
      } else if (
        errorMsg.includes("permission") ||
        errorMsg.includes("access denied") ||
        errorMsg.includes("forbidden") ||
        errorMsg.includes("insufficient permission")
      ) {
        userMessage = "Permission error. Please contact the administrator.";
      } else if (
        errorMsg.includes("spreadsheet") ||
        errorMsg.includes("sheet id") ||
        errorMsg.includes("not found")
      ) {
        userMessage =
          "Sheet configuration error. Please contact the administrator.";
      } else if (errorMsg.includes("network") || errorMsg.includes("timeout")) {
        userMessage =
          "Network error. Please check your connection and try again.";
      } else if (
        errorMsg.includes("quota") ||
        errorMsg.includes("rate limit")
      ) {
        userMessage =
          "Service temporarily unavailable. Please try again in a few moments.";
      } else if (
        errorMsg.includes("not configured") ||
        errorMsg.includes("credentials")
      ) {
        userMessage =
          "Service configuration error. Please contact the administrator.";
      }
    }

    return NextResponse.json(
      { success: false, message: userMessage },
      { status: 500 }
    );
  }
}
