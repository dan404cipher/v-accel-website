import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

// Google Sheets API configuration
const SPREADSHEET_ID =
  process.env.GOOGLE_SHEET_ID || "1OnWRLJttlpjOFD7AJ05zcg-xuFeLJezAWyB4Xv_XJxs";
const RANGE = "Sheet1!A:G"; // Adjust range based on your columns
const GOOGLE_SERVICE_ACCOUNT_EMAIL =
  process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL ||
  "contact-form-api@contact-form-api-478611.iam.gserviceaccount.com";
const GOOGLE_PRIVATE_KEY =
  process.env.GOOGLE_PRIVATE_KEY ||
  "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC9MsQ2Ypz4Q0bC\nMSbLj++M0LN8eypNAqdMZaJOEMYYbiQFz40EIThaalOzt6pEiRwIntPxBX2yJ2VR\nOa0KXXmNAkdUeOYNYzHNY58qaQBLyrWgdYKJZUSJQBOujn1NM5XesbhJi4kw6Avh\nO4Mbo8j+qH4L6k0tOGlFU/KRzRGL7kgYYyhmNZHZ2oTafVuICpQJ4A8vFtyFDlY6\nCaoCXmCYq5ds+GBcmuPyDdxfdQJ5aq7UWUmmH9ax4wxKM/4+cJGlawBtnHbXzF7P\nyBUGu5wevdVqZnYPBvay6+q6r4VNy4QixNXPX2kpYJ8+0gie2OBLeWJaqrVIST+2\n2S6nYo0PAgMBAAECggEADUBSAPW1MsyADhNIpwmN6KMV/yWNPHvdPLHdoLr2mYID\nDnSPaS3sLhNGZKppx9CCBW2wG+dSaJRc8GxzSqL8iE6BjL5YJEOdCFqlLIUbmuo3\n29LITQ7zIBAXkM79xtbk0HQBQCslB7lyEUbVpdIVUM1W4P3oO+OUAarq0WoAg+Xt\nz3uuO5im0Ma4jGasfTddO6yhfAozUliZElvhHW42F2GOgVoJmZGeRmWlLEYWJsJn\nzXVBz7svIt/Xo1bhZkgGvUOBHR/5yDozQwK8fSWSfggPI8GgIzhd3Fsnd8sFn+Qf\nF9asfGCO3isCRZyyQjKSrDPSVaNECp6dlX3Wy0LLqQKBgQDpb6w0G3mWRQjCTEho\nWs1jZ7BXcmpFqByUjThGOF8ZZdgGFQjPUyhHP60hxufE21TPzZhsOaTiwiqRWXwo\neSrzcrm9vX/QOdejdhj5M5GHaWE29UV7UoHLks5YYSbqNXhA748xlad5eCm1QW62\nm6cazKDMi+IVRU31fYaeT799wwKBgQDPfG+5y7+mDzlnzuO8jO1xellezK6qISxt\n0BOKW5lObH12bUQefvBCK6diO/LC43lkbpCnu3H9LutKocOoQoT1HzbqjK0MhkMQ\nU572evQ904kPOOR/OgaymjT1Mi/v+//aU91qoFwfWDGff/24MzkmBmAi3lmwbEIB\nSt/+LNPCxQKBgQCJ7WzfYPiHfIS/YRlLZ5OBz6tXEAiQ3dL9Ry/f9cDjHdT1Swpo\njeb3qj0e/wrEux+ypPURxUGSpk1GkowU0fs52yi6XrSdkP/D2qzI2dp8GxzQvz1t\nr4N3iGeZutWmfy9tlt6R2q4YzJJAQcgr525mHFBKa8CK9ucoTSH0eoRXxwKBgHZ6\nmRXgOdSqVt5nLnYphyDIe6X9fTOa89LVAYN9IMK+groQVNiRJcKzSMZ4cvxEhroJ\nxMJy7/liRGt+icpYCbIrG+G9aMeBF2SIS3p15Wg0lcxCcYAQ82gjVGA7Q1JndMcI\nIqRTY6dmZhetL4VygoyrEVR34YEzoFE6n0N194n9AoGBALGmp0Ssz1F0Pr84533Z\nx1W9J0E+yVLov4ZwHvc/LgsTNePfqztbFgPvlje4OGBPlCLzoI4/5m6S05H8Jj0B\nI3V4pf0XxePmXrO5JuogktSg1PHNWCIGrLF1nu6USsh+wE9w5NmNvxcomi8j8fA+\noHrAHvaGtSii8ETVuierM5ki\n-----END PRIVATE KEY-----\n";
// Initialize Google Sheets API
async function getGoogleSheetsClient() {
  try {
    // Using Service Account (Recommended for server-side)
    if (GOOGLE_SERVICE_ACCOUNT_EMAIL && GOOGLE_PRIVATE_KEY) {
      const auth = new google.auth.JWT({
        email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
        key: GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
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
