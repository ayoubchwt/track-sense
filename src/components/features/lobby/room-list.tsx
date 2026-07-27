import Label from "@/components/ui/label";
import RoomItem from "./room-item";

function RoomList() {
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
