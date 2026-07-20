import { mergeCSS } from "@/lib/utils/tailwind-uils";
function Input({ type, placeholder, className }: { type: string, placeholder: string, className: string }) {
    return <input className={className} type={type} placeholder={placeholder} />
}
export default Input;
