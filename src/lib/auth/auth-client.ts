import { createAuthClient } from "better-auth/client";
const authClient = createAuthClient({
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
});
export const { useSession, signIn, signUp, signOut } = authClient;
