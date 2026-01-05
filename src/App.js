import { useState } from "react";
import "./App.css";

function App() {
  const [isDark, setIsDark] = useState(true);

  // Counter states
  const [count, setCount] = useState(0);
  const [showCounter, setShowCounter] = useState(true);

  // Todo states
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
      <div className={isDark ? "container dark" : "container light"}>
        <button onClick={() => setIsDark(!isDark)}>
          Toggle Theme
        </button>
        
      {/* COUNTER APP */}
      <h1>Counter App</h1>

      <button onClick={() => setShowCounter(!showCounter)}>
        Toggle Counter
      </button>

      {showCounter && (
        <>
          <h2>{count}</h2>
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </>
      )}

      <hr />

      {/* TODO APP */}
      <h1>Todo App</h1>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />

      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
