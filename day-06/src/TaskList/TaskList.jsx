import TaskItem from "../TaskItem/TaskItem";

const TaskList = ({ task, onToggle }) => {
  return (
    <div>
      <TaskItem task={task[0]} onToggle={onToggle} />
      <TaskItem task={task[1]} onToggle={onToggle} />
      <TaskItem task={task[2]} onToggle={onToggle} />
    </div>
  );
};

export default TaskList;
