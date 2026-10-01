import TaskItem from "../TaskItem/TaskItem";

function TaskList() {
  const tasks = [
    "Learn JSX basics",
    "Build the TaskFlow page shell",
    "Commit work to GitHub",
  ];

  return (
    <main>
      <h2>My Tasks</h2>

      {/* TODO: replace these three lines with a loop later */}
      <ul>
        <TaskItem title={tasks[0]} />
        <TaskItem title={tasks[1]} />
        <TaskItem title={tasks[2]} />
      </ul>
    </main>
  );
}

export default TaskList;
