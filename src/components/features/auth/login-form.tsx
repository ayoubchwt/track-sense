import Label from "@/components/ui/label";
import AuthHeader from "./auth-header";
import Input from "@/components/ui/input";

function LoginForm() {
    return <div className="flex flex-col gap-5">
        <AuthHeader title="Log in" description="Welcome back."></AuthHeader>
        <div className="flex flex-col gap-1">
            <Label className="text-xs font-light text-(--text-light)">Email</Label>
            <Input className="border border-(--border-dark) rounded-md p-2 text-sm" placeholder="you@sound.fm" type="email"></Input>
        </div>
        <div className="flex flex-col gap-1">
            <Label className="text-xs font-light text-(--text-light)">Password</Label>
            <Input className="border border-(--border-dark) rounded-md p-2 text-sm" placeholder="you@sound.fm" type="password"></Input>
        </div>
    </div>
}
export default LoginForm;