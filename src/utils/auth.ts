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

export async function deleteAcc(email: string): Promise<boolean> {
  try {
    const res = await fetch("/api/deleteUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (!res.ok) throw new Error("Failed to delete account");

    return true;
  } catch (error) {
    console.error("DeleteAcc error:", error);
    return false;
  }
}

export async function retrieveAcc(email: string) {
  try {
    const res = await fetch("/api/get-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error || "Failed to retrieve password");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
