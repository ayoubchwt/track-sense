"use client";
import Spinner from "@/components/ui/spinner";
import authClient from "@/lib/auth/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function GuardRoute({
  children,
  redirectTo,
  isProtected,
}: {
  children: React.ReactNode;
  redirectTo: string;
  isProtected: boolean;
}) {
  const router = useRouter();
  const { isPending, data: session } = authClient.useSession();
  useEffect(() => {
    if (isProtected) {
      if (!isPending && !session) router.push(redirectTo);
    } else {
      if (!isPending && session) router.push(redirectTo);
    }
  }, [isPending, session, router, redirectTo, isProtected]);
  if (isPending && !session)
    return (
      <div className="flex flex-col items-center justify-center flex-1 w-full mx-auto">
        <Spinner size="xl"></Spinner>
      </div>
    );
  return <>{children}</>;
}
export default GuardRoute;
