import Header from "./Header/Header";
import TaskList from "./TaskList/TaskList";
import Footer from "./Footer/Footer";

function App() {
  // Array of task objects: each has a title and a done flag
  const tasks = [
    { title: "Learn JSX basics", done: true },
    { title: "Split TaskFlow into components", done: true },
    { title: "Pass data down with props", done: false },
  ];

  return (
    <div>
      <Header />
      <TaskList tasks={tasks} />
      <Footer />
    </div>
  );
}

export default App;
