import Round from "./round";

function Rounds() {
  return (
    <div className="flex flex-col gap-2">
      <Round isCorrect={false} songName="Flowers"></Round>
      <Round isCorrect={true} songName="Expresso"></Round>
      <Round isCorrect={false} songName="FREAKED OUT"></Round>
    </div>
  );
}
export default Rounds;
