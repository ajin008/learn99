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
