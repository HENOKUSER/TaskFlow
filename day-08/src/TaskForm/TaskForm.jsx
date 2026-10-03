import PropTypes from "prop-types";
import styles from "./TaskForm.module.css";

function TaskForm({ text, onTextChange, onAdd }) {
  // Runs when the form is submitted (Add button click)
  function handleSubmit(e) {
    e.preventDefault(); // stop the page from reloading
    onAdd();
  }

  // Runs on every key press inside the input
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault(); // stop the browser's own submit, so we don't add twice
      onAdd();
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        value={text}
        onChange={(e) => onTextChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="New task..."
      />
      <button className={styles.button} type="submit">
        Add
      </button>
    </form>
  );
}

TaskForm.propTypes = {
  text: PropTypes.string.isRequired,
  onTextChange: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default TaskForm;
