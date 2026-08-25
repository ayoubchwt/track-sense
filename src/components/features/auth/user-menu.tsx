import Button from "@/components/ui/button";
import UserIcon from "@/components/ui/user-icon";
import { Settings } from "lucide-react";

function UserMenu() {
  return (
    <div className="flex items-center justify-between gap-6">
      <Button variant="optional">
        <Settings className="w-4 h-4" />
      </Button>
      <UserIcon></UserIcon>
    </div>
  );
}
export default UserMenu;
