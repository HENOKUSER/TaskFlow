import React from "react";

const TaskItem = ({ task, onToggle }) => {
  const { id, title, done } = task;
  return (
    <div>
      <li>
        <input type="checkbox" checked={done} onChange={() => onToggle(id)} />
        {title}
      </li>
    </div>
  );
};

export default TaskItem;
