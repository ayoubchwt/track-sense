"use client";
import { useState } from "react";
import GenreSquare from "./genre-square";

function GenreSelector() {
  const [genre, setGenre] = useState("Pop");
  return (
    <div className="flex gap-2 items-center">
      <GenreSquare
        text="Pop"
        isSelected={genre === "Pop"}
        onClick={() => setGenre("Pop")}
      ></GenreSquare>
      <GenreSquare
        text="Rock"
        isSelected={genre === "Rock"}
        onClick={() => setGenre("Rock")}
      ></GenreSquare>
      <GenreSquare
        text="Hiphop"
        isSelected={genre === "Hiphop"}
        onClick={() => setGenre("Hiphop")}
      ></GenreSquare>
      <GenreSquare
        text="R&B"
        isSelected={genre === "rnb"}
        onClick={() => setGenre("rnb")}
      ></GenreSquare>
      <GenreSquare
        text="Global"
        isSelected={genre === "Global"}
        onClick={() => setGenre("Global")}
      ></GenreSquare>
    </div>
  );
}
export default GenreSelector;
