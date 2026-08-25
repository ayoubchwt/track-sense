"use client";
import { Moon } from "lucide-react";
import Button from "../ui/button";
import Ref from "../ui/ref";
import Logo from "../ui/logo";
import { useRouter } from "next/navigation";
import ProtectedComponent from "../features/auth/protected-component";
import UserMenu from "../features/auth/user-menu";
import AuthActions from "../features/auth/auth-actions";

function Navabar() {
  const router = useRouter();
  return (
    <div className="flex items-center justify-around p-3 border-b border-(--border-dark)">
      <Logo></Logo>
      <div className="flex items-center justify-center gap-10">
        <Ref onClick={() => router.push("/lobby")}>Lobby</Ref>
        <Ref onClick={() => router.push("/leaderboard")}>Laderboard</Ref>
      </div>
      <div className="flex items-center justify-center gap-6">
        <Button variant="optional">
          <Moon className="w-4 h-4" />
        </Button>
        <ProtectedComponent fallback={<AuthActions />}>
          <UserMenu></UserMenu>
        </ProtectedComponent>
      </div>
    </div>
  );
}
export default Navabar;
