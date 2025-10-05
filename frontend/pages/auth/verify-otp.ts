import type { NextApiRequest, NextApiResponse } from "next";

const otpStore = new Map<string, { otp: string; expiresAt: number }>(); // Same store

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const { phone, otp } = req.body;
  if (!phone || !otp) return res.status(400).json({ message: "Phone and OTP are required" });

  const record = otpStore.get(phone);

  if (!record) return res.status(400).json({ message: "OTP expired or invalid" });

  if (record.expiresAt < Date.now()) {
    otpStore.delete(phone);
    return res.status(400).json({ message: "OTP expired" });
  }

  if (record.otp !== otp) return res.status(400).json({ message: "Invalid OTP" });

  otpStore.delete(phone); // Remove used OTP

  return res.status(200).json({ message: "OTP verified successfully" });
}
