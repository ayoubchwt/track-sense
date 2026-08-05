"use client";
import Label from "@/components/ui/label";
import AuthHeader from "./auth-header";
import Button from "@/components/ui/button";
import Ref from "@/components/ui/ref";
import { useForm } from "react-hook-form";
import { register } from "@/types/auth";
import FormField from "@/components/ui/form-field";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/lib/validations/auth";
function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<register>({
    resolver: zodResolver(registerSchema),
  });
  const onSubmit = (data: register) => {
    console.log("submitted : ", data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-sm flex flex-col gap-5"
    >
      <AuthHeader
        title="Create account"
        description="One handle, one score."
      ></AuthHeader>
      <div className="flex flex-col gap-1">
        <Label>Username</Label>
        <FormField
          placeholder="Eclipsino"
          type="type"
          {...register("username")}
          error={errors.username?.message}
        ></FormField>
      </div>
      <div className="flex flex-col gap-1">
        <Label>Email</Label>
        <FormField
          placeholder="Eclipsino@sound.fm"
          type="email"
          {...register("email")}
          error={errors.email?.message}
        ></FormField>
      </div>
      <div className="flex flex-col gap-1">
        <Label>Password</Label>
        <FormField
          placeholder="At least 8 characters"
          type="password"
          {...register("password")}
          error={errors.password?.message}
        ></FormField>
      </div>
      <div className="flex flex-col gap-1">
        <Label>Confirm Password</Label>
        <FormField
          placeholder="Confirm your password"
          type="password"
          {...register("confirmPassword")}
          error={errors.confirmPassword?.message}
        ></FormField>
      </div>
      <Button variant="primary" type="submit">
        Create account
      </Button>
      <div className="flex items-center justify-center gap-1">
        <Label className="text-sm">Already playing ?</Label>
        <Ref className="text-(--text) underline">Log in</Ref>
      </div>
    </form>
  );
}
export default RegisterForm;
