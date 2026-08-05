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

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<Login>();
  const onSubmit = (data: Login) => {
    console.log("submitted:", data);
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
        ></FormField>
      </div>
      <div className="flex flex-col gap-1">
        <Label>Password</Label>
        <FormField
          placeholder="••••••••"
          type="password"
          {...register("password")}
        ></FormField>
      </div>
      <div className="flex items-center justify-between">
        <Checkbox text="Remember me"></Checkbox>
        <Ref className="text-xs">Forgot?</Ref>
      </div>
      <Button variant="primary" type="submit">
        Log in
      </Button>
      <Splitter></Splitter>
      <Button variant="optional" className="border border-(--border-dark)">
        Continue with Spotify
      </Button>
      <div className="flex items-center justify-center gap-1">
        <Label className="text-sm">New here ?</Label>
        <Ref className="text-(--text) underline">Create an account</Ref>
      </div>
    </form>
  );
}
export default LoginForm;
