"use client";
import { joinSessionAction } from "@/actions/lobby";
import Button from "@/components/ui/button";
import ErrorText from "@/components/ui/error-text";
import Spinner from "@/components/ui/spinner";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

function RoomItem({
  id,
  label,
  owner,
  genre,
  rounds,
}: {
  id: string;
  label: string;
  owner: string;
  genre: string;
  rounds: number;
}) {
  const [isPending, setIsPending] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const router = useRouter();
  const joinSession = async () => {
    setIsPending(true);
    setServerError(null);
    const response = await joinSessionAction({ id: id, isPublic: true });
    if (response.success) router.push("/play");
    if (response.error) setServerError(response.error);
    setIsPending(false);
  };
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between border-t border-(--border-dark) pt-2 pb-2">
        <div>
          <h1 className="text-sm text-(--text) font-light">{label}</h1>
          <h2 className="text-xs text-(--text-light) font-light">
            by {owner} . {genre} . {rounds}r
          </h2>
        </div>
        <Button
          variant="secondary"
          className="text-xs font-light"
          onClick={joinSession}
        >
          {isPending ? (
            <Spinner size="sm"></Spinner>
          ) : (
            <>
              Join <ArrowRight className="w-4 h-4" />
            </>
          )}
        </Button>
      </div>
      {serverError && <ErrorText>{serverError}</ErrorText>}
    </div>
  );
}
export default RoomItem;
