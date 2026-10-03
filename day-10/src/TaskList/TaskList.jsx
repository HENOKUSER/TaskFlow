import PropTypes from "prop-types";
import TaskItem from "../TaskItem/TaskItem";
import styles from "./TaskList.module.css";

function TaskList({ tasks, isLoading, onToggle, onDelete }) {
  // Early return: guards the whole list while loading
  if (isLoading) {
    return (
      <main className={styles.section}>
        <p className={styles.message}>⏳ Loading tasks...</p>
      </main>
    );
  }

  return (
    <main className={styles.section}>
      <h2 className={styles.heading}>My Tasks</h2>

      {tasks.length === 0 ? (
        <p className={styles.message}>No tasks yet</p>
      ) : (
        <ul className={styles.list}>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))}
        </ul>
      )}
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
  isLoading: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TaskList;
