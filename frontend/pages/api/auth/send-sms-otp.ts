import type { NextApiRequest, NextApiResponse } from "next";
import twilio from 'twilio';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const { phone } = req.body; // phone number to send OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  try {
    const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
    await client.messages.create({
      body: `Your OTP is: ${otp}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phone,
    });

    res.status(200).json({ message: "OTP sent", otp }); // otp only for testing
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error sending OTP" });
  }
}

