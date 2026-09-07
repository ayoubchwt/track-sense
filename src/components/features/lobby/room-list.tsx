import Label from "@/components/ui/label";
import RoomItem from "./room-item";
import { fetchPublicSessionsAction } from "@/actions/lobby";
import { useEffect, useState } from "react";
import { publicSession } from "@/types/lobby";
import Spinner from "@/components/ui/spinner";
import ErrorText from "@/components/ui/error-text";
function RoomList() {
  const [serverError, setServerError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);
  const [sessions, setSessions] = useState<publicSession[] | null>();
  useEffect(() => {
    const loadSessions = async () => {
      setServerError(null);
      setIsPending(true);
      const response = await fetchPublicSessionsAction();
      if (response.success) setSessions(response.data);
      if (response.error) setServerError(response.error);
      setIsPending(false);
    };
    loadSessions();
  }, []);
  if (isPending) return <Spinner size="md"></Spinner>;
  if (serverError) return <ErrorText>{serverError}</ErrorText>;
  return (
    <div>
      <Label>Public sessions</Label>
      {sessions?.map((session) => {
        return (
          <RoomItem
            key={session.id}
            label={session.sessionName}
            owner={session.ownerName}
            genre={session.genres}
            rounds={session.rounds}
          />
        );
      })}
    </div>
  );
}
export default RoomList;
