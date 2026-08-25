import GuardRoute from "@/components/features/auth/guard-route";
import LoginForm from "@/components/features/auth/login-form";

function Login() {
  return (
    <GuardRoute isProtected={false} redirectTo="/lobby">
      <div className="flex flex-col items-center justify-center flex-1">
        <LoginForm></LoginForm>
      </div>
    </GuardRoute>
  );
}
export default Login;
