import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "./button";

function PagiantionControl({
  currentPage,
  totalPages,
  onChange,
}: {
  currentPage: number;
  totalPages: number;
  onChange: (value: number) => void;
}) {
  if (totalPages < currentPage) return null;
  return (
    <div className="flex items-center justify-between">
      <p className="text-sm text-(--text-light)">
        Page {currentPage} of {totalPages}
      </p>
      <div className="flex items-center justify-center gap-2">
        <Button
          variant="primary"
          className="p-2"
          onClick={() => onChange(currentPage - 1)}
          disabled={currentPage <= 1}
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
        <Button
          variant="primary"
          className="p-2"
          onClick={() => onChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
export default PagiantionControl;
