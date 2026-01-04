import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  return (
    <div className="container">
      <h1>Counter App</h1>

      <button onClick={() => setShow(!show)}>
        Toggle Counter
      </button>

      {show && (
        <>
          <h2>{count}</h2>

          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </>
      )}
    </div>
  );
}

export default App;
