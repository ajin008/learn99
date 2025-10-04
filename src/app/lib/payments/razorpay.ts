"use client";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

function generatePassword(length: number = 6): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let pass = "";
  for (let i = 0; i < length; i++) {
    pass += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return pass;
}

type PayProps = {
  username: string;
  email: string;
  router: AppRouterInstance;
};

export async function createOrderAndPay({ username, email, router }: PayProps) {
  // 1. Call backend API to create Razorpay order
  const res = await fetch("/api/payment/order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email }),
  });

  if (!res.ok) throw new Error("Failed to create order");
  const { orderId } = await res.json();

  const options: any = {
    key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    amount: 9900,
    currency: "INR",
    name: "Learn99",
    description: "Vibe Coding for Non-Techies",
    order_id: orderId,
    handler: async function (response: any) {
      console.log("Payment success:", response);

      // ✅ Generate password here
      const password = generatePassword(6);

      // ✅ Call signup with password included
      try {
        const signupRes = await fetch("/api/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, email, password }),
        });

        if (!signupRes.ok) {
          const err = await signupRes.json();
          console.error("Signup failed:", err.error);
        } else {
          console.log("User stored successfully");
        }
      } catch (err) {
        console.error("Error storing user:", err);
      }

      // ✅ Pass password to generate-password page
      router.push(`/generate-password?pass=${password}`);
    },
    prefill: {
      email,
      name: username,
    },
    theme: { color: "#1a237e" },
  };

  const razorpay = new (window as any).Razorpay(options);
  razorpay.open();
}
