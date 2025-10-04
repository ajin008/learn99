import { handleSignupProps } from "@/types/interface";
import { toast } from "sonner";

export const handleSignup = async ({ username, email }: handleSignupProps) => {
  try {
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email }),
    });

    const data = await res.json();

    if (!res.ok) {
      toast.error(data.error || "Something went wrong");
    } else {
      toast.success(`Welcome, ${data.user.username}!`);
    }
  } catch {
    toast.error("Failed to sign up.");
  }
};

export const storePassword = async (pass: string) => {
  try {
    const res = await fetch("/api/store-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: pass }),
    });

    if (!res.ok) {
      const data = await res.json();
      toast.error(data.error || "Something went wrong");
      return false;
    }

    return true;
  } catch (err) {
    console.error(err);
    toast.error("Failed to save password");
    return false;
  }
};
