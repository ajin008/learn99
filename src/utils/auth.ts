import { toast } from "sonner";

export async function logoutUser() {
  try {
    const res = await fetch("/api/logout", { method: "POST" });

    if (!res.ok) {
      toast.error("Failed to logout");
      return false;
    }

    toast.success("Logged out successfully");
    return true;
  } catch (err) {
    console.error("Logout error:", err);
    toast.error("Something went wrong");
    return false;
  }
}
