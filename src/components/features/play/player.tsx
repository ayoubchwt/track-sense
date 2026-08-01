import GuessBox from "./guess-box";

function Player({
  role,
  playerName,
  points,
}: {
  role: "You" | "Opponent";
  playerName: string;
  points: number;
}) {
  return (
    <div className="flex">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h2>{playerName}</h2>
          <p>{role}</p>
        </div>
        <h1>{points}</h1>
      </div>
      {role === "You" ? <GuessBox></GuessBox> : <div></div>}
    </div>
  );
}
export default Player;
