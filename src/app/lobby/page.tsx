"use client";
import GuardRoute from "@/components/features/auth/guard-route";
import CreateSession from "@/components/features/lobby/create-session";
import JoinSession from "@/components/features/lobby/join-session";
import LobbyHeader from "@/components/features/lobby/lobby-header";

function Lobby() {
  return (
    <GuardRoute isProtected={true} redirectTo={"/auth/login"}>
      <div className="flex flex-col justify-center items-center flex-1">
        <div className="flex flex-col gap-5 items-start max-w-5xl mx-auto w-full ">
          <LobbyHeader></LobbyHeader>
          <div className="flex flex-col md:flex-row items-center justify-center gap-30 w-full">
            <CreateSession></CreateSession>
            <JoinSession></JoinSession>
          </div>
        </div>
      </div>
    </GuardRoute>
  );
}
export default Lobby;
