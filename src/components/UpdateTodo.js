import React from "react";
import { useDispatch } from "react-redux";
import { updateTodo } from "../feature/todoSlice";

const UpdateTodo = ({ todo }) => {
  const dispatch = useDispatch();

  const handleUpdateClick = () => {
    dispatch(updateTodo(todo.id));
  };

  return (
    <div>
      {todo.completed === false ? (
        <button onClick={handleUpdateClick}>done</button>
      ) : (
        <button onClick={handleUpdateClick} disabled>completed</button>
      )}
    </div>
  );
};

export default UpdateTodo;
