import { Moon } from "lucide-react";
import Button from "../ui/button";
import Ref from "../ui/ref";
import Logo from "../ui/logo";

function Navabar() {
  return (
    <div className="flex items-center justify-around p-3 border-b border-(--border-dark)">
      <Logo></Logo>
      <div className="flex items-center justify-center gap-10">
        <Ref>Lobby</Ref>
        <Ref>Laderboard</Ref>
      </div>
      <div className="flex items-center justify-center gap-6">
        <Button variant="optional">
          <Moon className="w-4 h-4" />
        </Button>
        <Button variant="secondary">Log in</Button>
        <Button variant="primary">Sign up</Button>
      </div>
    </div>
  );
}
export default Navabar;
