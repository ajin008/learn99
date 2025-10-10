import { requireAuth } from "@/lib/auth/serverAuth";
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

export async function getStudyMaterial(lessonId: string) {
  try {
    const res = await fetch("/api/getMaterial", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lessonId }),
      cache: "no-store",
    });

    const data = await res.json();

    // if (!res.ok) throw new Error(data.error || "Failed to get materials");

    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export const markCompleted = async ({ moduleId, email }: { moduleId: string; email: string }) => {
  try {
    const res = await fetch("/api/markLesson", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ moduleId, email }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Failed to mark as completed");

    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
};

export const checkIsCompleted = async ({
  moduleId,
  email,
}: {
  moduleId: string;
  email: string;
}) => {
  try {
    const res = await fetch("/api/isCompleted", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ moduleId, email }),
    });

    const data = await res.json();

    return data.completed;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const getCompletedModules = async (email: string) => {
  try {
    const res = await fetch("/api/getCompletedModules", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
      cache: "no-store",
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Failed to fetch completed modules");
    return (data.completedModules ?? []) as string[];
  } catch (err) {
    console.error(err);
    return [];
  }
};
