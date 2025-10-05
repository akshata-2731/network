import type { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch"; // Node fetch for API calls

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { clientName, mobileNumber } = req.body;

  if (!clientName || !mobileNumber) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Zoho CRM API endpoint for creating leads
    const zohoAccessToken = process.env.ZOHO_ACCESS_TOKEN; // We'll set this in .env.local
    const zohoApiUrl = "https://www.zohoapis.com/crm/v2/Leads";

    const response = await fetch(zohoApiUrl, {
      method: "POST",
      headers: {
        "Authorization": `Zoho-oauthtoken ${zohoAccessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: [
          {
            Company: "Referral Client",
            Last_Name: clientName,
            Mobile: mobileNumber,
            Lead_Source: "Referral Portal",
          },
        ],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Zoho API error:", data);
      return res.status(500).json({ message: "Failed to create lead in Zoho CRM" });
    }

    res.status(200).json({ message: "Referral submitted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}
