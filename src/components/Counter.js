import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        gap: "10px"
      }}
    >
      <button
        style={{
          width: "35px",
          height: "35px",
          margin: 0,
          padding: 0,
          fontSize: "25px",
          backgroundColor: "lightpink"
        }}
        onClick={() => setCounter(counter - 1)}
      >
        -
      </button>
      <h1>Counter: {counter}</h1>
      <button
        style={{
          width: "35px",
          height: "35px",
          margin: 0,
          padding: 0,
          fontSize: "25px",
          backgroundColor: "lightgreen"
        }}
        onClick={() => setCounter(counter + 1)}
      >
        +
      </button>
    </div>
  );
};
export default Counter;
