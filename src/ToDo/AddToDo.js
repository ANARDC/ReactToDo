import React, { useState } from "react";
import PropTypes from "prop-types";

const styles = {
  input: {
    marginRight: "1rem"
  },
  addButton: {
    width: 100,
    background: "#4CAF50",
    color: "white",
    borderRadius: "5%",
    border: "none"
  },
};

function AddToDo({ onCreate }) {
  const [value, setValue] = useState("");

  function submitHandler(event) {
    event.preventDefault();

    if (value.trim()) {
      onCreate(value);
      setValue("");
    }
  }

  return (
    <form style={{ marginBottom: "1rem" }} onSubmit={submitHandler}>
      <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        style={styles.input}
      />
      <button type="submit" style={styles.addButton}>
        Add ToDo
      </button>
    </form>
  );
}

AddToDo.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default AddToDo;
