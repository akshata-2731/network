"use client";

import { useState } from "react";

export default function TestSMS() {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const sendOTP = async () => {
    try {
      const res = await fetch("/api/send-sms-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
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
        placeholder="Enter phone (+91xxxxxxxxxx)"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <button onClick={sendOTP}>Send OTP</button>
      <p>{message}</p>
    </div>
  );
}

