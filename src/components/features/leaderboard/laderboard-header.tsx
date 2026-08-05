import Menu from "./menu";

function LeaderboardHeader() {
  return (
    <div className="flex justify-between items-end pt-30">
      <div className="flex flex-col">
        <h2 className="text-sm font-light text-(--text-light) tracking-widest">
          LADERBOARD
        </h2>
        <h1 className="text-4xl font-semibold">Global ranking</h1>
      </div>
      <Menu></Menu>
    </div>
  );
}
export default LeaderboardHeader;
