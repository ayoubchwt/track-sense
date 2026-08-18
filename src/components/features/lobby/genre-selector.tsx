"use client";
import { useState } from "react";
import GenreSquare from "./genre-square";

function GenreSelector({ onChange }: { onChange: (val: string) => void }) {
  const [genre, setGenre] = useState("Pop");
  return (
    <div className="flex gap-2 items-center">
      <GenreSquare
        text="Pop"
        isSelected={genre === "Pop"}
        onClick={() => {
          setGenre("Pop");
          onChange("Pop");
        }}
      ></GenreSquare>
      <GenreSquare
        text="Rock"
        isSelected={genre === "Rock"}
        onClick={() => {
          setGenre("Rock");
          onChange("Rock");
        }}
      ></GenreSquare>
      <GenreSquare
        text="Hiphop"
        isSelected={genre === "Hiphop"}
        onClick={() => {
          setGenre("Hiphop");
          onChange("HipHop");
        }}
      ></GenreSquare>
      <GenreSquare
        text="R&B"
        isSelected={genre === "rnb"}
        onClick={() => {
          setGenre("rnb");
          onChange("rnb");
        }}
      ></GenreSquare>
      <GenreSquare
        text="Global"
        isSelected={genre === "Global"}
        onClick={() => {
          setGenre("Global");
          onChange("Global");
        }}
      ></GenreSquare>
    </div>
  );
}
export default GenreSelector;
