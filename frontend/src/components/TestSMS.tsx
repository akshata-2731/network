"use client";

import { useState } from "react";

export default function TestSMS() {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // Validate phone: must be 12 digits starting with '91'
  const isValidPhone = (num: string) => /^91\d{10}$/.test(num);

  const sendOTP = async () => {
    const cleanedPhone = phone.trim();
    if (!isValidPhone(cleanedPhone)) {
      setMessage("Enter a valid mobile number (91XXXXXXXXXX).");
      return;
    }

    try {
      const res = await fetch("/api/send-sms-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: cleanedPhone, name: "User" }), // add name for MSG91 template
      });
      const data = await res.json();
      setMessage(data.message + (data.otp ? ` (OTP: ${data.otp})` : ""));
    } catch (err) {
      console.error(err);
      setMessage("Error sending OTP");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Test SMS OTP</h2>
      <input
        type="text"
        placeholder="Enter phone (91XXXXXXXXXX)"
        value={phone}
        onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ""))}
        style={{ marginRight: "10px" }}
        maxLength={12}
      />
      <button onClick={sendOTP}>Send OTP</button>
      <p>{message}</p>
    </div>
  );
}
