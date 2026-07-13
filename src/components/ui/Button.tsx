import { ReactNode } from "react";
import { mergeCSS } from "@/lib/TailwindUils";
import { ButtonVariants, ButtonVariantProps } from "@/lib/ButtonVariants";

function Button({
    children,
    variant,
    className,
    onClick,
}: {
    children: ReactNode;
    variant?: ButtonVariantProps["variant"];
    className?: string;
    onClick?: () => void;
}) {
    return (
        <button
            onClick={onClick}
            className={mergeCSS(ButtonVariants({ variant }), className)}
        >
            {children}
        </button>
    );
}
export default Button;
