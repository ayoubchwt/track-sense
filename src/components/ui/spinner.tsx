import { mergeCSS } from "@/lib/utils/tailwind-utils";

function Spinner({
  size = "md",
  className,
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizeClasses = {
    sm: "w-4 h-4 border-2",
    md: "w-8 h-8 border-4",
    lg: "w-12 h-12 border-4",
  };
  return (
    <div
      className={mergeCSS(
        `${sizeClasses[size]} border-transparent border-t-(--text) rounded-full animate-spin`,
        className,
      )}
    ></div>
  );
}
export default Spinner;
