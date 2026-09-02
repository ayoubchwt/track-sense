import Label from "./label";

function Checkbox({
  text,
  onChange,
}: {
  text: string;
  onChange: (value: boolean) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <input
        className="accent-(--text)"
        type="checkbox"
        onChange={(e) => onChange(e.target.checked)}
      />
      <Label>{text}</Label>
    </div>
  );
}
export default Checkbox;
