"use client";
import ProtectedRoute from "@/components/features/auth/protected-route";
import LeaderboardHeader from "@/components/features/leaderboard/laderboard-header";
import RankingTable from "@/components/features/leaderboard/ranking-table";

function Laderboard() {
  return (
    <ProtectedRoute redirectTo={"/auth/login"}>
      <div className="flex flex-col gap-10 flex-1 max-w-5xl mx-auto w-full">
        <LeaderboardHeader></LeaderboardHeader>
        <RankingTable></RankingTable>
      </div>
    </ProtectedRoute>
  );
}
export default Laderboard;
