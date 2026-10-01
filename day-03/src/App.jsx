import TaskList from "./TaskList/TaskList";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function App() {
  // Three sample task titles stored in a plain JavaScript array
  const tasks = [
    "Learn JSX basics",
    "Build the TaskFlow page shell",
    "Commit work to GitHub",
  ];

  return (
    <div>
      <Header />
      <TaskList />
      <Footer />
    </div>
  );
}

export default App;
