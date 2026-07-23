import Label from "@/components/ui/label";
import AuthHeader from "./auth-header";
import Input from "@/components/ui/input";
import Checkbox from "@/components/ui/checkbox";
import Ref from "@/components/ui/ref";
import Button from "@/components/ui/button";
import Splitter from "@/components/ui/spliter";

function LoginForm() {
  return (
    <div className="w-full max-w-sm flex flex-col gap-5">
      <AuthHeader title="Log in" description="Welcome back."></AuthHeader>
      <div className="flex flex-col gap-1">
        <Label>Email</Label>
        <Input placeholder="you@sound.fm" type="email"></Input>
      </div>
      <div className="flex flex-col gap-1">
        <Label>Password</Label>
        <Input placeholder="••••••••" type="password"></Input>
      </div>
      <div className="flex items-center justify-between">
        <Checkbox text="Remember me"></Checkbox>
        <Ref className="text-xs">Forgot?</Ref>
      </div>
      <Button variant="primary">Log in</Button>
      <Splitter></Splitter>
      <Button variant="optional" className="border border-(--border-dark)">
        Continue with Spotify
      </Button>
      <div className="flex items-center justify-center gap-1">
        <Label className="text-sm">New here ?</Label>
        <Ref className="text-(--text) underline">Create an account</Ref>
      </div>
    </div>
  );
}
export default LoginForm;
