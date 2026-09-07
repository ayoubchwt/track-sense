"use server";
import { headers } from "next/headers";
import auth from "./auth";
export async function getUser() {
  const authData = await auth.api.getSession({
    headers: await headers(),
  });
  if (!authData) return null;
  const { user } = authData;
  return user;
}
