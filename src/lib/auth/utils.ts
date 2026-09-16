"use server";
import { headers } from "next/headers";
import auth from "./auth";
import { redirect } from "next/navigation";
export async function getUser() {
  const authData = await auth.api.getSession({
    headers: await headers(),
  });
  if (!authData) return null;
  const { user } = authData;
  return user;
}
export async function verifyUser(isProtected: boolean) {
  const user = await getUser();
  if (isProtected && !user) redirect("/auth/login");
  if (!isProtected && user) redirect("/");
}
