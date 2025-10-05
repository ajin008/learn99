"use client";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { toast } from "sonner";

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
  // ✅ 1. Check if email already exists BEFORE payment
  const checkRes = await fetch("/api/check-user", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });

  const checkData = await checkRes.json();
  if (!checkRes.ok) {
    toast.error(checkData.error || "Something went wrong");
    return; // ❌ stop flow
  }

  if (checkData.exists) {
    toast.error("This email is already registered. Please login.");
    return; // ❌ stop flow
  }

  // ✅ 2. Proceed with Razorpay order creation
  const res = await fetch("/api/payment/order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email }),
  });

  if (!res.ok) throw new Error("Failed to create order");
  const { orderId } = await res.json();

  // ✅ 3. Setup Razorpay
  const options: any = {
    key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    amount: 9900,
    currency: "INR",
    name: "Learn99",
    description: "Vibe Coding for Non-Techies",
    order_id: orderId,
    handler: async function () {
      toast.success("Signup successful 🎉");
      const password = generatePassword(6);

      try {
        const signupRes = await fetch("/api/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, email, password }),
        });

        if (!signupRes.ok) {
          const err = await signupRes.json();
          console.error("Signup failed:", err.error);
          toast.error(err.error || "Signup failed");
        }
      } catch (err) {
        console.error("Error storing user:", err);
        toast.error("Could not save user, try again.");
      }

      router.push(`/generate-password?pass=${password}`);
    },
    prefill: { email, name: username },
    theme: { color: "#1a237e" },
  };

  const razorpay = new (window as any).Razorpay(options);
  razorpay.open();
}
