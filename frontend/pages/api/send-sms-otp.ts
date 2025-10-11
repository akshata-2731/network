import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
if (req.method !== "POST") return res.status(405).end();

const { phone, name } = req.body; // include name for template variable
const otp = Math.floor(100000 + Math.random() * 900000).toString();


try {
    const apiKey = process.env.MSG91_AUTH_KEY;
    const templateId = process.env.MSG91_TEMPLATE_ID; // DLT template
    const senderId = process.env.MSG91_SENDER_ID;


    if (!apiKey || !templateId || !senderId) {
      return res.status(500).json({ message: "MSG91 credentials or template ID missing" });
    }


    const url = "https://api.msg91.com/api/v2/sendsms";
    const payload = {
      sender: senderId,
      template_id: templateId,
      mobiles: phone,
      var1: name,  // ##name##
      var2: otp,
      route: 4 
    };


    const response = await axios.post(url, payload, {
      headers: {
        authkey: apiKey,
        "Content-Type": "application/json"
      }
    });


    if (response.data.type === "success") {
      res.status(200).json({ message: "OTP sent", otp });
    } else {
      res.status(500).json({ message: "Failed to send OTP", error: response.data });
    }
  } catch (err: any) {
    console.error("MSG91 error:", err?.response?.data || err.message);
    res.status(500).json({
      message: "Error sending OTP",
      error: err?.response?.data || err.message || err
    });
  }
}