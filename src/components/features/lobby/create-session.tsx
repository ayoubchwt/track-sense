import Input from "@/components/ui/input";
import Label from "@/components/ui/label";
import NumberSelector from "./number-selector";
import GenreSelector from "./genre-selector";

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
    </div>
  );
}
export default CreateSession;
