import LeaderboardHeader from "@/components/features/leaderboard/laderboard-header";
import RankingTable from "@/components/features/leaderboard/ranking-table";
import { verifyUser } from "@/lib/auth/utils";

async function Laderboard() {
  await verifyUser(true);
  return (
    <div className="flex flex-col gap-10 flex-1 max-w-5xl mx-auto w-full">
      <LeaderboardHeader></LeaderboardHeader>
      <RankingTable></RankingTable>
    </div>
  );
}
export default Laderboard;
