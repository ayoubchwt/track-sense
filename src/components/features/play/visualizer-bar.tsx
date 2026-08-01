import { mergeCSS } from "@/lib/utils/tailwind-utils";
function VisualizerBar({
  isActive,
  height,
  className,
}: {
  isActive: boolean;
  height: number;
  className?: string;
}) {
  return (
    <div
      className={mergeCSS(
        `w-1.25 rounded-full ${isActive ? "bg-(--text)" : "bg-(--border-dark)"}`,
        className,
      )}
      style={{ height: `${height}px` }}
    ></div>
  );
}
export default VisualizerBar;
