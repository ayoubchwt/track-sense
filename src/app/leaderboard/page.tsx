"use client";
import GuardRoute from "@/components/features/auth/guard-route";
import LeaderboardHeader from "@/components/features/leaderboard/laderboard-header";
import RankingTable from "@/components/features/leaderboard/ranking-table";

function Laderboard() {
  return (
    <GuardRoute isProtected={true} redirectTo={"/auth/login"}>
      <div className="flex flex-col gap-10 flex-1 max-w-5xl mx-auto w-full">
        <LeaderboardHeader></LeaderboardHeader>
        <RankingTable></RankingTable>
      </div>
    </GuardRoute>
  );
}
export default Laderboard;
