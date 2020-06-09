import React, { useState, useReducer } from "react";
import { todoReducer, initialState } from "../reducer/reducer";

const Todo = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [newTodo, setNewTodo] = useState("");

  const handleChanges = e => {
    setNewTodo(e.target.value);
  };

  return (
    <div>
      <div>
        <input
          className="todo-input"
          type="text"
          name="newTodoText"
          value={newTodo}
          onChange={handleChanges}
        ></input>
        <button
          onClick={() => {
            dispatch({ type: "ADD_TODO", payload: newTodo });
          }}
        >
          Add Todo
        </button>
        <button
          onClick={() => {
            dispatch({ type: "CLEAR_TODO" });
          }}
        >
          Clear
        </button>
      </div>
      {}
      <div>
        <h2>{newTodo}</h2>
      </div>
    </div>
  );
};

export default Todo;
