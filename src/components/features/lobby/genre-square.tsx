function GenreSquare({
  text,
  isSelected,
  onClick,
}: {
  text: string;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className={`p-2 border text-sm rounded-md cursor-pointer ${isSelected ? "border-(--text) text-(--text)" : "border-(--border-dark) text-(--text-light)"}`}
      onClick={onClick}
    >
      {text}
    </div>
  );
}
export default GenreSquare;
