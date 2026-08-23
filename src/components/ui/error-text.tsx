import { mergeCSS } from "@/lib/utils/tailwind-utils";

function ErrorText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={mergeCSS(
        "text-xs text-(--error) font-light min-h-2",
        className,
      )}
    >
      {children}
    </p>
  );
}
export default ErrorText;
