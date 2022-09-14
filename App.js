// import "./Style.css";
import React, { useState, useEffect, useMemo } from "react";
// import { Stopwatch, Todos, Stopwatch1, IconAWS } from "./Hooks";
// import { useFetch } from "./hooks/customHook";

const App = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const logic = (state) => {
    switch (state) {
      case "start":
        setIsRunning(true);
        break;
      case "stop":
        setIsRunning(false);
        break;
      default:
        setIsRunning(false);
        setTime(0);
    }
  };

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setTime(time + 1);
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  });
  const [selectedNum, setSelectedNum] = useState(100);
  const allPrimes = [];

  const memoizedValue = useMemo(() => {
    
    for (let counter = 2; counter < selectedNum; counter++) {
      if (isPrime(counter)) {
        allPrimes.push(counter);
      }}
  }, )


  return (
    <div>
      <div>
        <h1>{time}s</h1>
        <button onClick={() => logic("start")}>Start</button>
        <button onClick={() => logic("stop")}>Pause</button>
        <button onClick={() => logic("reset")}>Reset</button>
        {/* <button onClick={memoizedValue}>Memo</button> */}
      </div>
      <br />
      <form>
        <label>Your number:</label>
        <input
          type="number"
          value={selectedNum}
          onChange={(event) => {
            setSelectedNum(event.target.value);
          }}
        />
      </form>
      <span style={{ fontWeight: "600" }}>
        There are {allPrimes.length} prime(s) between 1 and {selectedNum}:{" "}
      </span>
      <span>{allPrimes.join(", ")}</span>
    </div>
  );
};

const isPrime = (n) => {
  const max = Math.ceil(Math.sqrt(n));
  if (n === 2) {
    return true;
  }

  for (let counter = 2; counter <= max; counter++) {
    if (n % counter === 0) {
      return false;
    }
  }

  return true;
};

export default App;