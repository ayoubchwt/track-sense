import { mergeCSS } from "@/lib/utils/tailwind-uils";
import { ReactNode } from "react";

function Ref({ children, href, className }: { children: ReactNode, href?: string, className?: string }) {
    const variant = "text-(--text-light) text-sm font-light hover:text-(--text) cursor-pointer"
    return <a className={mergeCSS(variant, className)} href={href}>
        {children}
    </a>
}
export default Ref;