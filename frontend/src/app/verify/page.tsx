'use client';

import { useState } from "react";

export default function Verify() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [sentOtp, setSentOtp] = useState<string | null>(null);

  const sendOtp = async () => {
    const res = await fetch("/api/send-sms-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone }),
    });
    const data = await res.json();
    setSentOtp(data.otp); // only for testing
  };

  const verifyOtp = () => {
    if (otp === sentOtp) {
      alert("Phone verified! Redirecting to dashboard...");
      window.location.href = "/dashboard";
    } else {
      alert("Invalid OTP");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6">
      <h2 className="text-2xl font-bold">Verify your phone number</h2>
      <input
        type="text"
        placeholder="Enter phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="border p-2 rounded"
      />
      <button
        onClick={sendOtp}
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Send OTP
      </button>
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        className="border p-2 rounded"
      />
      <button
        onClick={verifyOtp}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Verify OTP
      </button>
      {sentOtp && <p className="text-sm">OTP sent: {sentOtp}</p>}
    </div>
  );
}
