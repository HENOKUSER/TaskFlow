import { useState, useEffect } from "react";
import Header from "./Header/Header";
import TaskForm from "./TaskForm/TaskForm";
import TaskControls from "./TaskControls/TaskControls";
import TaskList from "./TaskList/TaskList";
import Footer from "./Footer/Footer";
import styles from "./App.module.css";

// Bullet 1: every task has a stable, unique id (a string, never reused)
function createInitialTasks() {
  return [
    { id: crypto.randomUUID(), title: "Learn JSX basics", done: true },
    {
      id: crypto.randomUUID(),
      title: "Split TaskFlow into components",
      done: true,
    },
    {
      id: crypto.randomUUID(),
      title: "Pass data down with props",
      done: false,
    },
  ];
}

const App = () => {
  const [tasks, setTasks] = useState(createInitialTasks);
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("all"); // "all" | "active" | "completed"
  const [sortAZ, setSortAZ] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
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

    setTasks((prev) => [
      ...prev,
      { id: crypto.randomUUID(), title, done: false },
    ]);
    setText("");
  }

  function deleteTask(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  // Derived values: recalculated every render, tasks state is never changed
  // Bullet 3: filter
  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.done;
    if (filter === "completed") return task.done;
    return true; // "all"
  });

  // Bullet 4: sort a copy, not the state array
  const visibleTasks = sortAZ
    ? [...filteredTasks].sort((a, b) => a.title.localeCompare(b.title))
    : filteredTasks;

  return (
    <div className={styles.app}>
      <Header />
      <TaskForm text={text} onTextChange={setText} onAdd={addTask} />
      <TaskControls
        filter={filter}
        onFilterChange={setFilter}
        sortAZ={sortAZ}
        onSortChange={setSortAZ}
      />
      <TaskList
        tasks={visibleTasks}
        isLoading={isLoading}
        onToggle={toggleTask}
        onDelete={deleteTask}
      />
      <Footer />
    </div>
  );
};

export default App;
