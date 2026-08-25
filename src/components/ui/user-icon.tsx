import Image from "next/image";
import userIcon from "@/assets/pictures/user-icon.jpg";
function UserIcon() {
  return (
    <Image
      src={userIcon}
      alt="user icon image"
      width={32}
      className="rounded-full"
    ></Image>
  );
}
export default UserIcon;
