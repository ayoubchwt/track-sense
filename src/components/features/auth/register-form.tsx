import Label from "@/components/ui/label";
import AuthHeader from "./auth-header";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import Ref from "@/components/ui/ref";

function RegisterForm() {
  return (
    <div className="w-full max-w-sm flex flex-col gap-5">
      <AuthHeader
        title="Create account"
        description="One handle, one score."
      ></AuthHeader>
      <div className="flex flex-col gap-1">
        <Label>Username</Label>
        <Input placeholder="Eclipsino" type="type"></Input>
      </div>
      <div className="flex flex-col gap-1">
        <Label>Email</Label>
        <Input placeholder="Eclipsino@sound.fm" type="email"></Input>
      </div>
      <div className="flex flex-col gap-1">
        <Label>Password</Label>
        <Input placeholder="At least 8 characters" type="password"></Input>
      </div>
      <div className="flex flex-col gap-1">
        <Label>Confirm Password</Label>
        <Input placeholder="Confirm your password" type="password"></Input>
      </div>
      <Button variant="primary">Create account</Button>
      <div className="flex items-center justify-center gap-1">
        <Label className="text-sm">Already playing ?</Label>
        <Ref className="text-(--text) underline">Log in</Ref>
      </div>
    </div>
  );
}
export default RegisterForm;
