import { Check, X } from "lucide-react";
function Round({
  isCorrect,
  songName,
}: {
  isCorrect: boolean;
  songName: string;
}) {
  return (
    <div className="flex items-center gap-2 border-t border-(--border-dark) w-full pt-2">
      {isCorrect ? <Check className="w-5 h-5" /> : <X className="w-5 h-5" />}
      <p className="text-sm font-light">{songName}</p>
    </div>
  );
}
export default Round;
