import { mergeCSS } from "@/lib/utils/tailwind-utils";
import { ReactNode } from "react";

function Ref({
  children,
  href,
  onClick,
  className,
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}) {
  const variant =
    "text-(--text-light) text-sm font-light hover:text-(--text) cursor-pointer";
  return (
    <a className={mergeCSS(variant, className)} href={href} onClick={onClick}>
      {children}
    </a>
  );
}
export default Ref;
