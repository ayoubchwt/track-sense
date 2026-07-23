import { mergeCSS } from "@/lib/utils/tailwind-uils";
function Input({
  type,
  placeholder,
  className,
}: {
  type: string;
  placeholder: string;
  className?: string;
}) {
  return (
    <input
      className={mergeCSS(
        "border border-(--border-dark) rounded-md p-2 text-sm outline-none focus:ring-1 focus:ring-(--text)",
        className,
      )}
      type={type}
      placeholder={placeholder}
    />
  );
}
export default Input;
