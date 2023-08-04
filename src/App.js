import { useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }
  return (
    <div>
      <h1> Need any Advice? </h1>
      <h2> {advice} </h2>
      <button onClick={getAdvice}> Get Advice </button>
      <p>
        {" "}
        You've read <strong>{count}</strong> pices of advice
      </p>
    </div>
  );
}
