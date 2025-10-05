"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [serverOtp, setServerOtp] = useState("");
  const router = useRouter();

  // Send OTP
  const sendOtp = async () => {
    const res = await fetch("/api/send-sms-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone }),
    });
    const data = await res.json();
    setOtpSent(true);
    setServerOtp(data.otp); // for testing only
  };

  // Verify OTP
  const verifyOtp = () => {
    if (otp === serverOtp) {
      alert("Phone verified! Redirecting to Dashboard...");
      router.push("/dashboard");
    } else {
      alert("Invalid OTP!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#e6f2f4] p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 flex flex-col gap-6">
        <div className="flex flex-col items-center gap-3">
          <div className="bg-[#daeaf6] rounded-full p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-8 w-8 text-[#394652]"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <rect width="18" height="18" x="3" y="3" rx="9" fill="#daeaf6" />
              <path
                d="M12 16A4 4 0 1 0 12 8a4 4 0 0 0 0 8zm6-2v1a6 6 0 0 1-12 0v-1"
                stroke="#394652"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>
          <span className="text-2xl font-bold text-center text-[#394652]">
            Welcome Back
          </span>
          <span className="text-[#5a686d] text-sm text-center">
            Sign in to your account or create a new one
          </span>
        </div>

        <div className="flex flex-col gap-4">
          <label className="text-[15px] font-semibold text-[#394652] mb-0">
            Phone Number
          </label>
          <div className="flex items-center border border-[#e2e7ee] rounded-md bg-[#f8fafb] px-3 py-2 shadow-sm">
            <input
              type="text"
              placeholder="+91 7414952117"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="flex-grow bg-transparent border-none focus:outline-none focus:ring-0 text-[16px] text-[#394652]"
            />
            <svg
              className="h-5 w-5 text-[#90a2b0]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                d="M15.232 17.232a9 9 0 1 1 0-12.728 9 9 0 0 1 0 12.728z"
                stroke="#90a2b0"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>
          <button
            onClick={sendOtp}
            className="w-full bg-[#168aad] hover:bg-[#126780] transition text-white rounded-md py-3 text-[15px] font-semibold shadow"
          >
            Send OTP
          </button>
          {otpSent && (
            <>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="border border-[#e2e7ee] rounded-md bg-[#f8fafb] px-3 py-2 text-[15px] text-[#394652] focus:outline-none focus:ring-2 focus:ring-[#168aad]"
              />
              <button
                onClick={verifyOtp}
                className="w-full bg-[#2ecc71] hover:bg-[#27ae60] transition text-white rounded-md py-3 text-[15px] font-semibold shadow"
              >
                Verify OTP
              </button>
            </>
          )}
        </div>

        <div className="flex items-center gap-2">
          <hr className="flex-grow border-[#e2e7ee]" />
          <span className="px-3 text-[#90a2b0] text-[14px] font-semibold">
            Or continue with
          </span>
          <hr className="flex-grow border-[#e2e7ee]" />
        </div>

        <button
          onClick={() => signIn("google")}
          className="w-full flex justify-center items-center gap-3 bg-white border border-[#e2e7ee] hover:bg-gray-50 transition text-[#394652] rounded-md py-3 text-[15px] font-semibold shadow"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 533.5 544.3"
            className="w-5 h-5"
          >
            <path
              fill="#4285f4"
              d="M533.5 278.4c0-18.1-1.6-35.5-4.6-52.4H272v99.1h146.9c-6.3 34-25 62.9-53.4 82.2v68h86.2c50.6-46.6 79.8-115.1 79.8-196.9z"
            />
            <path
              fill="#34a853"
              d="M272 544.3c72.8 0 133.9-24.2 178.6-65.9l-86.2-68c-23.9 16-54.6 25.6-92.4 25.6-71 0-131.3-47.9-152.8-112.4H31.9v70.8c44.6 87.8 135.8 150.1 240.1 150.1z"
            />
            <path
              fill="#fbbc04"
              d="M119.2 321.7c-10.3-30.8-10.3-64 0-94.8V156H31.9c-38.7 76.6-38.7 167.2 0 243.8l87.3-70.1z"
            />
            <path
              fill="#ea4335"
              d="M272 107.7c39.4 0 74.9 13.6 102.7 40.4l77-77C405.6 24 346.2 0 272 0 167.7 0 76.5 62.3 31.9 150.1l87.3 70.8c21.5-64.5 81.8-112.4 152.8-112.4z"
            />
          </svg>
          Sign in with Google
        </button>

        <div className="text-[12px] text-[#8496ae] text-center mt-1">
          By signing in, you agree to our{" "}
          <a href="/terms" className="text-[#168aad] underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="/privacy" className="text-[#168aad] underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
}
