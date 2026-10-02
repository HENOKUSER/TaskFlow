import PropTypes from "prop-types";
import TaskItem from "../TaskItem/TaskItem";

function TaskList({ tasks, onToggle }) {
  return (
    <main>
      <h2>My Tasks</h2>

      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} onToggle={onToggle} />
        ))}
      </ul>
    </main>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      done: PropTypes.bool,
    }),
  ).isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default TaskList;
