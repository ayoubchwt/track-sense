import Image from "next/image";
import logo from "../../assets/pictures/logo.png";
import { montserrat } from "@/app/layout";
function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image src={logo} alt="TrackSense logo" width={45}></Image>
      <h1
        className={`text-xl font-semibold text-(--text) ${montserrat.className}`}
      >
        TrackSense
      </h1>
    </div>
  );
}
export default Logo;
