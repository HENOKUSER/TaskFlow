import { useState, useEffect } from "react";
import Header from "./Header/Header";
import TaskForm from "./TaskForm/TaskForm";
import TaskList from "./TaskList/TaskList";
import Footer from "./Footer/Footer";
import styles from "./App.module.css";

function createInitialTasks() {
  return [
    { id: 1, title: "Learn JSX basics", done: true },
    { id: 2, title: "Split TaskFlow into components", done: true },
    { id: 3, title: "Pass data down with props", done: false },
  ];
}

const App = () => {
  const [tasks, setTasks] = useState(createInitialTasks);
  const [text, setText] = useState("");
  // Starts true: the list is hidden until the "first load" finishes
  const [isLoading, setIsLoading] = useState(true);

  // Simulate a short load, then show the tasks
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer); // cleanup if the component unmounts
  }, []);

  function toggleTask(id) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    );
  }

  function addTask() {
    const title = text.trim();
    if (!title) return;

    setTasks((prev) => [...prev, { id: Date.now(), title, done: false }]);
    setText("");
  }

  function deleteTask(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  return (
    <div className={styles.app}>
      <Header />
      <TaskForm text={text} onTextChange={setText} onAdd={addTask} />
      <TaskList
        tasks={tasks}
        isLoading={isLoading}
        onToggle={toggleTask}
        onDelete={deleteTask}
      />
      <Footer />
    </div>
  );
};

export default App;
