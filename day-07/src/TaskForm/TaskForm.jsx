import PropTypes from "prop-types";

function TaskForm({ text, onTextChange, onAdd }) {
  function handleSubmit(e) {
    e.preventDefault(); // stop the page from reloading
    onAdd();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => onTextChange(e.target.value)}
        placeholder="New task..."
      />
      <button type="submit">Add</button>
    </form>
  );
}

TaskForm.propTypes = {
  text: PropTypes.string.isRequired,
  onTextChange: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default TaskForm;
