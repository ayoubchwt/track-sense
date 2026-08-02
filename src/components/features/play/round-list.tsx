import Label from "@/components/ui/label";
import Round from "./round";

function RoundList() {
  return (
    <>
      <Label>Last rounds results</Label>
      <div className="flex flex-col gap-2 w-full">
        <Round isCorrect={false} songName="Flowers"></Round>
        <Round isCorrect={true} songName="Expresso"></Round>
        <Round isCorrect={false} songName="FREAKED OUT"></Round>
      </div>
    </>
  );
}
export default RoundList;
