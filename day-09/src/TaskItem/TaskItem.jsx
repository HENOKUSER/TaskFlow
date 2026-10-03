import PropTypes from "prop-types";
import styles from "./TaskItem.module.css";

function TaskItem({ task, onToggle, onDelete }) {
  const { id, title, done } = task;

  return (
    <li className={styles.item}>
      <span className={`${styles.title} ${done ? styles.titleDone : ""}`}>
        {title}
      </span>{" "}
      {/* && shows the badge only on done tasks */}
      {done && <span className={styles.badge}>✅ Completed</span>}{" "}
      {/* Ternary switches the button label */}
      <button
        className={`${styles.button} ${styles.toggleButton}`}
        onClick={() => onToggle(id)}
      >
        {done ? "Undo" : "Done"}
      </button>{" "}
      <button
        className={`${styles.button} ${styles.deleteButton}`}
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </li>
  );
}

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    done: PropTypes.bool,
  }).isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TaskItem;
