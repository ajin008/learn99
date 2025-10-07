import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function requireAuth() {
  const cookieStore = await cookies();
  const email = cookieStore.get("userEmail")?.value;

  if (!email) {
    redirect("/login");
  }

  return email;
}
