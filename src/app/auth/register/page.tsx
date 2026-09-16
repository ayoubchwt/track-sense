import RegisterForm from "@/components/features/auth/register-form";
import { verifyUser } from "@/lib/auth/utils";

async function Register() {
  await verifyUser(false);
  return (
    <div className="flex flex-col items-center justify-center flex-1">
      <RegisterForm></RegisterForm>
    </div>
  );
}
export default Register;
