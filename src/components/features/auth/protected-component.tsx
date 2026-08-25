import Spinner from "@/components/ui/spinner";
import authClient from "@/lib/auth/auth-client";

function ProtectedComponent({
  children,
  fallback,
}: {
  children: React.ReactNode;
  fallback: React.ReactNode;
}) {
  const { isPending, data: session } = authClient.useSession();
  if (isPending) return <Spinner size="sm"></Spinner>;
  if (!session) return <>{fallback}</>;
  return <>{children}</>;
}
export default ProtectedComponent;
