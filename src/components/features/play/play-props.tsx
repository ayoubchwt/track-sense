import Button from "@/components/ui/button";
import Label from "@/components/ui/label";
import TrackTimeline from "@/components/ui/track-timeline";

function PlayProps() {
  return (
    <div className="flex items-center justify-around w-full">
      <div className="flex items-center justify-center gap-5">
        <Label>Session</Label>
        <p>7F·92K</p>
      </div>
      <div className="flex items-center justify-center gap-5">
        <Label>Round</Label>
        <p>4/10</p>
      </div>
      <TrackTimeline></TrackTimeline>
      <Button variant="secondary">Skip(-0 points)</Button>
    </div>
  );
}
export default PlayProps;
