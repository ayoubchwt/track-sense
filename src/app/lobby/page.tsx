import CreateSession from "@/components/features/lobby/create-session";
import LobbyHeader from "@/components/features/lobby/lobby-header";

function Lobby() {
    return <div className="flex flex-col items-center justify-center flex-1">
        <LobbyHeader></LobbyHeader>
        <div>
            <CreateSession></CreateSession>
        </div>
    </div>
}
export default Lobby;
