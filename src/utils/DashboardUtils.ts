import { toast } from "sonner";

export const fetchUser = async (
  email: string
): Promise<{ username: string; email: string } | null> => {
  try {
    const res = await fetch(`/api/user?email=${email}`);

    if (!res.ok) {
      toast.error("Failed to fetch user");
      return null;
    }

    const data = await res.json();

    // normalize response
    return {
      username: data.user.username ?? "User",
      email: data.user.email ?? email,
    };
  } catch (err) {
    console.error("Error fetching user:", err);
    toast.error("Something went wrong");
    return null;
  }
};

export async function updateUserProfile({
  email,
  username,
  password,
}: {
  email: string;
  username?: string;
  password?: string;
}) {
  try {
    const res = await fetch("/api/updateUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, username, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      toast.error(data.error || "Failed to update profile");
      return null;
    }

    toast.success("Profile updated successfully 🎉");
    return data.user;
  } catch (err) {
    console.error("Update error", err);
    toast.error("Something went wrong while updating");
    return null;
  }
}
