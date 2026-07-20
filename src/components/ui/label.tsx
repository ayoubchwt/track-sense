import { ReactNode } from "react";

function Label({ className, children }: { className: string, children: ReactNode }) {
    return <label className={className}>{children}</label>
}
export default Label;