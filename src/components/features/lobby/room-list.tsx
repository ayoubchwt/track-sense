"use client";
import Label from "@/components/ui/label";
import RoomItem from "./room-item";
import { fetchPublicSessionsAction } from "@/actions/lobby";
import { useEffect, useState } from "react";
import { publicSession } from "@/types/lobby";
import Spinner from "@/components/ui/spinner";
import ErrorText from "@/components/ui/error-text";
import PagiantionControl from "@/components/ui/pagination-control";
function RoomList() {
  const [serverError, setServerError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);
  const [sessions, setSessions] = useState<publicSession[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  useEffect(() => {
    const loadSessions = async () => {
      setServerError(null);
      setIsPending(true);
      const response = await fetchPublicSessionsAction(currentPage);
      if (response.success && response.data) {
        setSessions(response.data.sessions);
        setCurrentPage(response.data?.currentPage);
        setTotalPages(response.data?.totalSessions);
      }
      if (response.error) setServerError(response.error);
      setIsPending(false);
    };
    loadSessions();
  }, [currentPage]);
  if (isPending) return <Spinner size="md"></Spinner>;
  if (serverError) return <ErrorText>{serverError}</ErrorText>;
  return (
    <div className="flex flex-col h-70">
      <Label>Public sessions</Label>
      {sessions?.map((session) => {
        return (
          <RoomItem
            key={session.id}
            id={session.id}
            label={session.sessionName}
            owner={session.ownerName}
            genre={session.genres}
            rounds={session.rounds}
          />
        );
      })}
      <PagiantionControl
        currentPage={currentPage}
        totalPages={totalPages}
        onChange={setCurrentPage}
      ></PagiantionControl>
    </div>
  );
}
export default RoomList;
