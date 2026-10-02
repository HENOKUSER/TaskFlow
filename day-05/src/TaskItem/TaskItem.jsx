import PropTypes from "prop-types";

function TaskItem({ tasks }) {
  const { title, done } = tasks;

  return (
    <li>
      {done ? "✅" : "⬜"} {title}
    </li>
  );
}

// task is an object; title is required text, done is a true/false value
TaskItem.propTypes = {
  task: PropTypes.shape({
    title: PropTypes.string.isRequired,
    done: PropTypes.bool,
  }).isRequired,
};

export default TaskItem;
