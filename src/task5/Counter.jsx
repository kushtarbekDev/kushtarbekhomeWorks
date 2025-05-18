import React, { useCallback, useState } from "react";
import { ChildButton } from "./ChildButton";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleCounter = useCallback(() => {
    alert("Hello Kush");
  }, []);
  return (
    <div>
      <h1>Counter:{count}</h1>
      <button onClick={() => setCount(count + 1)}>Увеличить</button>
      <ChildButton onClick={handleCounter} label="нажми меня" />
    </div>
  );
};
