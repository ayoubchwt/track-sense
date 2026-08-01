import { mergeCSS } from "@/lib/utils/tailwind-utils";
function Input({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={mergeCSS(
        "border border-(--border-dark) rounded-md p-2 text-sm outline-none focus:ring-1 focus:ring-(--text)",
        className,
      )}
      {...props}
    />
  );
}
export default Input;
