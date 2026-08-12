"use client ";
import Spinner from "@/components/ui/spinner";
import authClient from "@/lib/auth/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function ProtectedRoute({
  children,
  redirectTo,
}: {
  children: React.ReactNode;
  redirectTo: string;
}) {
  const router = useRouter();
  const { isPending, data: session } = authClient.useSession();
  useEffect(() => {
    if (!isPending && !session) router.push(redirectTo);
  }, [isPending, session, router, redirectTo]);
  if (isPending && !session)
    return (
      <div className="flex flex-col items-center justify-center flex-1 w-full mx-auto">
        <Spinner size="xl"></Spinner>
      </div>
    );
  return <>{children}</>;
}
export default ProtectedRoute;
