import { ReactNode } from "react";
import { mergeCSS } from "@/lib/utils/tailwind-utils";
import {
  ButtonVariants,
  ButtonVariantProps,
} from "@/lib/utils/button-variants";

function Button({
  children,
  variant,
  className,
  type,
  disabled,
  onClick,
}: {
  children: ReactNode;
  variant?: ButtonVariantProps["variant"];
  className?: string;
  disabled?: boolean;
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={mergeCSS(ButtonVariants({ variant }), className)}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
export default Button;
