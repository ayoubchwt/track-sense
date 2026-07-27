import CreateSession from "@/components/features/lobby/create-session";
import JoinSession from "@/components/features/lobby/join-session";
import LobbyHeader from "@/components/features/lobby/lobby-header";

function Lobby() {
  return (
    <div className="flex flex-col justify-center items-center flex-1">
      <div className="flex flex-col gap-5">
        <LobbyHeader></LobbyHeader>
        <div className="flex items-center justify-center gap-10">
          <CreateSession></CreateSession>
          <JoinSession></JoinSession>
        </div>
      </div>
    </div>
  );
}
export default Lobby;
