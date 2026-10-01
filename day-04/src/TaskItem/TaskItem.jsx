function TaskItem({ task }) {
  const { title, done } = task;

  return (
    <li>
      {done ? "✅" : "⬜"} {title}
    </li>
  );
}

export default TaskItem;