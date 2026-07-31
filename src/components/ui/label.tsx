import { ReactNode } from "react";
import { mergeCSS } from "@/lib/utils/tailwind-utils";
function Label({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <label
      className={mergeCSS("text-xs font-light text-(--text-light)", className)}
    >
      {" "}
      {children}
    </label>
  );
}
export default Label;
