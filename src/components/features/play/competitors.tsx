import Player from "./player";

function Competitors() {
  return (
    <div className="flex w-full justify-center gap-10">
      <Player role="You" playerName="Eclipse" points={12}></Player>
      <Player role="Opponent" playerName="Lucy" points={10}></Player>
    </div>
  );
}
export default Competitors;
