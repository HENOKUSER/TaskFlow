import PropTypes from "prop-types";
import TaskItem from "../TaskItem/TaskItem";

function TaskList({ tasks }) {
  return (
    <main>
      <h2>My Tasks</h2>

      {/* TODO: replace these three lines with a loop later */}
      <ul>
        <TaskItem tasks={tasks[0]} />
        <TaskItem tasks={tasks[1]} />
        <TaskItem tasks={tasks[2]} />
      </ul>
    </main>
  );
}

// tasks is a required array, and every item in it must have the task shape
TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      done: PropTypes.bool,
    }),
  ).isRequired,
};

export default TaskList;
