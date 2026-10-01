function App() {
  // Three sample task titles stored in a plain JavaScript array
  const tasks = [
    "Learn JSX basics",
    "Build the TaskFlow page shell",
    "Commit work to GitHub",
  ];

  return (
    <div>
      <header>
        <h1>TaskFlow</h1>
      </header>

      <main>
        <h2>My Tasks</h2>

        {/* TODO: the real task list (rendered with a loop) will go here */}

        {/* Rendering with {} expressions, one by one, no loop yet */}
        <ul>
          <li>{tasks[0]}</li>
          <li>{tasks[1]}</li>
          <li>{tasks[2]}</li>
        </ul>
      </main>

      <footer>
        <p>TaskFlow &copy; 2026</p>
      </footer>
    </div>
  );
}

export default App;