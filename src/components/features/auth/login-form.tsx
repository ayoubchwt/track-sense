"use client";
import Label from "@/components/ui/label";
import AuthHeader from "./auth-header";
import Checkbox from "@/components/ui/checkbox";
import Ref from "@/components/ui/ref";
import Button from "@/components/ui/button";
import Splitter from "@/components/ui/spliter";
import { Login } from "@/types/auth";
import { useForm } from "react-hook-form";
import FormField from "@/components/ui/form-field";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/lib/validations/auth";
import { useState } from "react";
import Spinner from "@/components/ui/spinner";
import { useRouter } from "next/navigation";
import authClient from "@/lib/auth/auth-client";

function LoginForm() {
  const [serverError, setServerError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit = async (data: Login) => {
    if (!data) return;
    setServerError(null);
    await authClient.signIn.email(
      {
        email: data.email,
        password: data.password,
      },
      {
        onRequest: () => {
          setIsLoading(true);
        },
        onSuccess: () => {
          setIsLoading(false);
          router.push("/");
        },
        onError: (req) => {
          setIsLoading(false);
          setServerError(req.error.message);
        },
      },
    );
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-sm flex flex-col gap-5"
    >
      <AuthHeader title="Log in" description="Welcome back."></AuthHeader>
      <div className="flex flex-col gap-1">
        <Label>Email</Label>
        <FormField
          placeholder="you@sound.fm"
          type="email"
          {...register("email")}
          error={errors.email?.message}
        ></FormField>
      </div>
      <div className="flex flex-col gap-1">
        <Label>Password</Label>
        <FormField
          placeholder="••••••••"
          type="password"
          {...register("password")}
          error={errors.password?.message}
        ></FormField>
      </div>
      <div className="flex items-center justify-between">
        <Checkbox text="Remember me"></Checkbox>
        <Ref className="text-xs">Forgot?</Ref>
      </div>
      <Button variant="primary" type="submit" disabled={isLoading}>
        {isLoading ? (
          <Spinner size="sm" className="border-t-(--bg) border-l-(--bg)"></Spinner>
        ) : (
          <>Log in</>
        )}
      </Button>
      <Splitter></Splitter>
      <Button variant="optional" className="border border-(--border-dark)">
        Continue with Spotify
      </Button>
      {serverError && <p>{serverError}</p>}
      <div className="flex items-center justify-center gap-1">
        <Label className="text-sm">New here ?</Label>
        <Ref className="text-(--text) underline">Create an account</Ref>
      </div>
    </form>
  );
}
export default LoginForm;
