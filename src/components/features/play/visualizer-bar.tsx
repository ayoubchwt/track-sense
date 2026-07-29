import { mergeCSS } from "@/lib/utils/tailwind-uils";

function VisualizerBar({
  isActive,
  className,
}: {
  isActive: boolean;
  className: string;
}) {
  return (
    <div
      className={mergeCSS(
        `w-1 ${isActive ? "bg-(--border-light)" : "bg-(--text)"}`,
        className,
      )}
    ></div>
  );
}
export default VisualizerBar;
