import TaskItem from "../TaskItem/TaskItem";

function TaskList({ tasks }) {
  return (
    <main>
      <h2>My Tasks</h2>

      {/* TODO: replace these three lines with a loop later */}
      <ul>
        <TaskItem task={tasks[0]} />
        <TaskItem task={tasks[1]} />
        <TaskItem task={tasks[2]} />
      </ul>
    </main>
  );
}

export default TaskList;
