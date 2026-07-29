import Button from "@/components/ui/button";
import Label from "@/components/ui/label";
import TrackTimeline from "@/components/features/play/track-timeline";

function PlayProps() {
  return (
    <div className="flex items-center justify-around w-full border-b border-(--border-dark)">
      <div className="flex items-center justify-center gap-5">
        <Label>Session</Label>
        <p className="text-sm font-light">7F·92K</p>
      </div>
      <div className="flex items-center justify-center gap-5">
        <Label>Round</Label>
        <p className="text-sm font-light">4/10</p>
      </div>
      <TrackTimeline></TrackTimeline>
      <Button variant="secondary" className="font-light text-xs">
        Skip (-0 points)
      </Button>
    </div>
  );
}
export default PlayProps;
