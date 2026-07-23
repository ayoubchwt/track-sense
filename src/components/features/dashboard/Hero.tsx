import Button from "@/components/ui/button";

function Hero() {
  return (
    <div className="flex flex-col items-start justify-center gap-4 border-b pb-30 border-(--border-dark)">
      <h2 className="text-md font-light text-(--text-light) tracking-widest">
        TRACK-SENSE
      </h2>
      <div className="flex flex-col items-start gap-2">
        <h1 className="text-6xl font-semibold">Guess the song.</h1>
        <h1 className="text-6xl font-semibold text-(--text-light)">
          Before they do.
        </h1>
      </div>
      <p className="text-lg max-w-4xl text-(--text-light)">
        A quiet, head-to-head song guessing game. Two players, one snippet,
        first correct answer wins the round.
      </p>
      <Button variant="primary">Start a Session</Button>
    </div>
  );
}
export default Hero;
