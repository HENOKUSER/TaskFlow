import PropTypes from "prop-types";
import styles from "./TaskControls.module.css";

const FILTERS = [
  { value: "all", label: "All" },
  { value: "active", label: "Active" },
  { value: "completed", label: "Completed" },
];

function TaskControls({ filter, onFilterChange, sortAZ, onSortChange }) {
  return (
    <div className={styles.controls}>
      <div className={styles.filters}>
        {FILTERS.map(({ value, label }) => (
          <button
            key={value}
            className={`${styles.button} ${
              filter === value ? styles.active : ""
            }`}
            onClick={() => onFilterChange(value)}
            aria-pressed={filter === value}
          >
            {label}
          </button>
        ))}
      </div>

      <button
        className={`${styles.button} ${sortAZ ? styles.active : ""}`}
        onClick={() => onSortChange((prev) => !prev)}
        aria-pressed={sortAZ}
      >
        {sortAZ ? "Sorted A-Z" : "Sort A-Z"}
      </button>
    </div>
  );
}

TaskControls.propTypes = {
  filter: PropTypes.oneOf(["all", "active", "completed"]).isRequired,
  onFilterChange: PropTypes.func.isRequired,
  sortAZ: PropTypes.bool.isRequired,
  onSortChange: PropTypes.func.isRequired,
};

export default TaskControls;
