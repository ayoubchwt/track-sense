import TypingIndicator from "@/components/ui/typing-indicator";
import GuessBox from "./guess-box";
import RoundList from "./round-list";

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
    <div className="flex flex-col gap-5 w-full">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold">{playerName}</h2>
          <p className="text-sm font-light text-(--text-light)">{role}</p>
        </div>
        <h1 className="text-3xl font-semibold">{points}</h1>
      </div>
      {role === "You" ? (
        <GuessBox></GuessBox>
      ) : (
        <div className="flex items-center gap-2">
          <TypingIndicator></TypingIndicator>
          <p className="text-sm text-(--text-light) font-light">
            {playerName} is typing
          </p>
        </div>
      )}
      <RoundList></RoundList>
    </div>
  );
}
export default Player;
