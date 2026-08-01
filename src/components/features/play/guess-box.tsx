import Input from "@/components/ui/input";
import Label from "@/components/ui/label";
import { useState } from "react";
function GuessBox() {
  const [guess, setGuess] = useState<string>();
  return (
    <div className="flex flex-col">
      <Label>Your guess</Label>
      <h1>{guess}</h1>
      <Input
        type="text"
        placeholder="Type the song title..."
        onChange={(e) => setGuess(e.target.value)}
      ></Input>
    </div>
  );
}
export default GuessBox;
