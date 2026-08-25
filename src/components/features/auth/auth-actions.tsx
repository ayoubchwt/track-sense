import Button from "@/components/ui/button";
import { useRouter } from "next/navigation";

function AuthActions() {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between gap-6">
      <Button variant="secondary" onClick={() => router.push("/auth/login")}>
        Log in
      </Button>
      <Button variant="primary" onClick={() => router.push("/auth/register")}>
        Sign up
      </Button>
    </div>
  );
}
export default AuthActions;
