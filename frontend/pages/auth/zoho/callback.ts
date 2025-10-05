import type { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch"; // make sure node-fetch is installed

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { code } = req.query;

  if (!code) return res.status(400).json({ error: "Authorization code is missing" });

  try {
    const params = new URLSearchParams();
    params.append("grant_type", "authorization_code");
    params.append("client_id", "1000.AGAOE4MZSD43DO5Q677C8D5O9LHQ0B");
    params.append("client_secret", "a9c7cc42c7fef31510d90129e40e5d572e710b229f");
    params.append("redirect_uri", "http://localhost:3000/api/zoho/callback");
    params.append("code", code as string);

    const response = await fetch(`https://accounts.zoho.in/oauth/v2/token
`, {
      method: "POST",
      body: params,
    });

    const data = await response.json();

    console.log("Zoho Token Response:", data); // You will see access_token & refresh_token
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to get access token" });
  }
}
