"use client";
import { useState } from "react";
import NumberSquare from "./number-square";

function NumberSelector() {
  const [Number, setNumber] = useState(5);
  return (
    <div className="flex gap-2 items-center">
      <NumberSquare
        number="5"
        isSelected={Number === 5}
        onClick={() => setNumber(5)}
      ></NumberSquare>
      <NumberSquare
        number="10"
        isSelected={Number === 10}
        onClick={() => setNumber(10)}
      ></NumberSquare>
      <NumberSquare
        number="15"
        isSelected={Number === 15}
        onClick={() => setNumber(15)}
      ></NumberSquare>
      <NumberSquare
        number="20"
        isSelected={Number === 20}
        onClick={() => setNumber(20)}
      ></NumberSquare>
    </div>
  );
}
export default NumberSelector;
