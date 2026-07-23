function NumberSquare({
  number,
  isSelected,
  onClick,
}: {
  number: string;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className={`w-10 h-10 flex items-center justify-center border text-sm rounded-md ${isSelected ? "border-(--border-text) text-(--bg) bg-(--text)" : "border-(--border-dark) text-(--text-light)}"}`}
      onClick={onClick}
    >
      {number}
    </div>
  );
}
export default NumberSquare;
