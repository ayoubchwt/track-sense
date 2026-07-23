import Input from "@/components/ui/input";
import Label from "@/components/ui/label";
import NumberSelector from "./number-selector";
import GenreSelector from "./genre-selector";
import Button from "@/components/ui/button";
import { Copy } from "lucide-react";

function CreateSession() {
  return (
    <div className="flex flex-col">
      <h1 className="text-(--text-light) font-semibold text-md">CREATE</h1>
      <div className="flex flex-col gap-1">
        <Label>Session Name</Label>
        <Input type="text" placeholder="session id"></Input>
      </div>
      <div className="flex flex-col gap-1">
        <Label>Rounds</Label>
        <NumberSelector></NumberSelector>
      </div>
      <div className="flex flex-col gap-1">
        <Label>Genres</Label>
        <GenreSelector></GenreSelector>
      </div>
      <div className="felx flex-col gap-1">
        <Label>Session coded</Label>
        <div className="flex items-center justify-between">
          <h2>7F.87H</h2>
          <Button
            variant="secondary"
            className="text-xs font-light flex items-center justify-center gap-1"
          >
            <Copy className="w-3 h-3" />
            Copy
          </Button>
        </div>
        <Button variant="primary">Launch Session</Button>
      </div>
    </div>
  );
}
export default CreateSession;
