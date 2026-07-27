import Button from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

function RoomItem({
  label,
  owner,
  genre,
  rounds,
}: {
  label: string;
  owner: string;
  genre: string;
  rounds: number;
}) {
  return (
    <div className="flex items-center justify-between border-t border-(--border-dark) pt-2 pb-2">
      <div>
        <h1 className="text-sm text-(--text) font-light">{label}</h1>
        <h2 className="text-xs text-(--text-light) font-light">
          by {owner} . {genre} . {rounds}r
        </h2>
      </div>
      <Button variant="secondary" className="text-xs font-light">
        Join <ArrowRight className="w-4 h-4" />
      </Button>
    </div>
  );
}
export default RoomItem;
