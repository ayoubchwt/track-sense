import GuardRoute from "@/components/features/auth/guard-route";
import RegisterForm from "@/components/features/auth/register-form";

function Register() {
  return (
    <GuardRoute isProtected={false} redirectTo="/lobby">
      <div className="flex flex-col items-center justify-center flex-1">
        <RegisterForm></RegisterForm>
      </div>
    </GuardRoute>
  );
}
export default Register;
