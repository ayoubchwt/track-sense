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
        text="Rap"
        isSelected={genre === "Rap"}
        onClick={() => setGenre("Rap")}
      ></GenreSquare>
      <GenreSquare
        text="Rock"
        isSelected={genre === "Rock"}
        onClick={() => setGenre("Rock")}
      ></GenreSquare>
    </div>
  );
}
export default GenreSelector;
