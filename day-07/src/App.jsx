import { useState } from "react";
import Header from "./Header/Header";
import TaskForm from "./TaskForm/TaskForm";
import TaskList from "./TaskList/TaskList";
import Footer from "./Footer/Footer";

// Lazy initialization: this function runs only on the first render
function createInitialTasks() {
  return [
    { id: 1, title: "Learn JSX basics", done: true },
    { id: 2, title: "Split TaskFlow into components", done: true },
    { id: 3, title: "Pass data down with props", done: false },
  ];
}

const App = () => {
  // Pass the function itself (no parentheses) so React calls it once
  const [tasks, setTasks] = useState(createInitialTasks);

  // Separate state just for what the user is typing
  const [text, setText] = useState("");

  // Functional update: always works from the latest tasks
  function toggleTask(id) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    );
  }

  function addTask() {
    const title = text.trim();
    if (!title) return; // ignore empty input

    // New array: old items spread out, new task added at the end
    setTasks((prev) => [...prev, { id: Date.now(), title, done: false }]);
    setText(""); // clear the input
  }

  return (
    <div>
      <Header />
      <TaskForm text={text} onTextChange={setText} onAdd={addTask} />
      <TaskList tasks={tasks} onToggle={toggleTask} />
      <Footer />
    </div>
  );
};

export default App;
