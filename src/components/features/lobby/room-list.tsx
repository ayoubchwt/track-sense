import Label from "@/components/ui/label";
import RoomItem from "./room-item";
import { fetchPublicSessionsAction } from "@/actions/lobby";

async function RoomList() {
  const response = await fetchPublicSessionsAction();
  if (response.success)
    return (
      <div>
        <Label>Enter code</Label>
        <RoomItem
          label="Late-night Indie"
          owner="eclipse"
          genre="Indie"
          rounds={10}
        ></RoomItem>
        <RoomItem
          label="Late-night Indie"
          owner="eclipse"
          genre="Indie"
          rounds={10}
        ></RoomItem>
        <RoomItem
          label="Late-night Indie"
          owner="eclipse"
          genre="Indie"
          rounds={10}
        ></RoomItem>
      </div>
    );
}
export default RoomList;
