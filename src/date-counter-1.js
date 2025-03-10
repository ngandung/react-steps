import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const today = new Date();
  today.setDate(today.getDate() + step * count);
  const date = today.toDateString();

  const day = step * count;

  function addStep() {
    setStep((s) => s + 1);
  }

  function removeStep() {
    if (step > 1) setStep((s) => s - 1);
  }

  function addCount() {
    setCount((c) => c + 1);
  }

  function removeCount() {
    setCount((c) => c - 1);
  }

  return (
    <>
      <div className="wrapper">
        <button onClick={removeStep}>-</button>
        <p>Step: {step}</p>
        <button onClick={addStep}>+</button>
      </div>

      <div className="wrapper">
        <button onClick={removeCount}>-</button>
        <p>Count: {count}</p>
        <button onClick={addCount}>+</button>
      </div>

      <div className="wrapper">
        <p>
          {day === 0
            ? "Today "
            : day < 0
            ? Math.abs(day) + " days ago "
            : day > 0
            ? day + " days from today "
            : ""}
          is {date}
        </p>
      </div>
    </>
  );
}
