import LoginForm from "@/components/features/auth/login-form";
import { verifyUser } from "@/lib/auth/utils";

async function Login() {
  await verifyUser(false);
  return (
    <div className="flex flex-col items-center justify-center flex-1">
      <LoginForm></LoginForm>
    </div>
  );
}
export default Login;
