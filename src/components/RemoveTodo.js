import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "../feature/todoSlice";

const RemoveButton = ({ todoId }) => {
  const dispatch = useDispatch();

  const handleRemoveClick = () => {
    dispatch(removeTodo(todoId));
  };

  return <button onClick={handleRemoveClick}>remove</button>;
};

export default RemoveButton;
