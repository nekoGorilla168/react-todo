import React from "react";

export const InputTodo = (props) => {
  const {
    todoText,
    onChange,
    onClick,
    disabled
  } = props;

  const style = {
    backgroundColor: "#c1ffff",
    width: "400px",
    height: "30px",
    borderRadius: "8px",
    padding: "8px",
    margin: "8px"
  };

  return (
    <div style={style}>
      <input
        disabled={disabled}
        placeholder="Input TODO !"
        value={todoText}
        onChange={onChange}
      />
      <button
        disabled={disabled}
        onClick={onClick}
      >
        ADD
      </button>
    </div>
  );
};
