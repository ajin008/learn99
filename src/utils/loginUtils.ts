import { VerifyLoginProps } from "@/types/types";
import { toast } from "sonner";

export const verifyLogin = async ({ email, password }: VerifyLoginProps) => {
  try {
    const res = await fetch("/api/verifyLogin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      toast.error(data.error || "Login failed, please check your credentials");
      return false;
    }

    return true;
  } catch (error) {
    console.error("login error", error);
    return false;
  }
};
