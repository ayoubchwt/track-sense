import { Check, X } from "lucide-react";
function Round({
  isCorrect,
  songName,
}: {
  isCorrect: boolean;
  songName: string;
}) {
  return (
    <div className="flex items-center gap-2">
      {isCorrect ? <Check /> : <X />}
      <p>{songName}</p>
    </div>
  );
}
export default Round;
