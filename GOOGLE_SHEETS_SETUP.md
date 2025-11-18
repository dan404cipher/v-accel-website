# Google Sheets API Setup Guide

This guide will help you set up Google Sheets API to save contact form submissions.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Contact Form Submissions" (or any name you prefer)
4. Copy the Sheet ID from the URL:
   - URL format: `https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit`
   - Example: If URL is `https://docs.google.com/spreadsheets/d/1abc123xyz/edit`, then `1abc123xyz` is your Sheet ID

## Step 2: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click "Select a project" → "New Project"
3. Name it (e.g., "Contact Form API")
4. Click "Create"

## Step 3: Enable Google Sheets API

1. In your project, go to "APIs & Services" → "Library"
2. Search for "Google Sheets API"
3. Click on it and press "Enable"

## Step 4: Create Service Account (Recommended Method)

1. Go to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "Service Account"
3. Fill in:
   - Service account name: `contact-form-sheets`
   - Click "Create and Continue"
   - Skip role assignment (click "Continue")
   - Click "Done"
4. Click on the created service account
5. Go to "Keys" tab → "Add Key" → "Create new key"
6. Choose "JSON" format
7. Download the JSON file (keep it secure!)

## Step 5: Share Google Sheet with Service Account

1. Open your Google Sheet
2. Click "Share" button (top right)
3. Add the service account email (found in the downloaded JSON file, it looks like: `contact-form-sheets@project-id.iam.gserviceaccount.com`)
4. Give it "Editor" permission
5. Click "Send" (you can uncheck "Notify people")

## Step 6: Configure Environment Variables

1. Open the downloaded JSON file
2. Copy these values:

   - `client_email` → This is your `GOOGLE_SERVICE_ACCOUNT_EMAIL`
   - `private_key` → This is your `GOOGLE_PRIVATE_KEY`

3. Create a `.env.local` file in your project root:

```env
GOOGLE_SHEET_ID=your_sheet_id_from_step_1
GOOGLE_SERVICE_ACCOUNT_EMAIL=your_client_email_from_json
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour private key from JSON\n-----END PRIVATE KEY-----\n"
```

**Important:**

- Keep the quotes around `GOOGLE_PRIVATE_KEY`
- The `\n` in the private key should be actual newlines in the JSON, but when pasting in .env, keep them as `\n`

## Step 7: Test

1. Restart your development server: `npm run dev`
2. Submit the contact form
3. Check your Google Sheet - you should see the submission appear!

## Troubleshooting

- **"Google Sheet ID not configured"**: Check your `.env.local` file has `GOOGLE_SHEET_ID`
- **"Permission denied"**: Make sure you shared the sheet with the service account email
- **"Invalid credentials"**: Double-check your `GOOGLE_PRIVATE_KEY` format in `.env.local`

## For Production Deployment

When deploying (Vercel, Netlify, etc.), add these environment variables in your hosting platform's settings:

- `GOOGLE_SHEET_ID`
- `GOOGLE_SERVICE_ACCOUNT_EMAIL`
- `GOOGLE_PRIVATE_KEY`
