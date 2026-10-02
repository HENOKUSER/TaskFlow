import { useState } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import TaskList from "./TaskList/TaskList";
const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Learn JSX basics", done: true },
    { id: 2, title: "Split TaskFlow into components", done: true },
    { id: 3, title: "Pass data down with props", done: false },
  ]);

  function toggleTask(id) {
    setTasks((prv) =>
      prv.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    );
  }

  return (
    <div>
      <Header />
      <TaskList tasks={tasks} onToggle={toggleTask} />
      <Footer />
    </div>
  );
};

export default App;
