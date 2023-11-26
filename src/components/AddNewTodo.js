import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../feature/todoSlice";

function AddNewTodo() {
  // export const AddTodo = () => {
  const [input, setInput] = useState("this is default");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
  };

  return (
    <form id="todo-form" onSubmit={addTodoHandler}>
      <table id="todo-list">
        <thead>
          <tr>
            <th>
              <input
                type="text"
                id="todo-input"
                placeholder="Add a new task"
                onChange={(e) => setInput(e.target.value)}
              />
            </th>
            <th>
              <button type="submit">Add</button>
            </th>
          </tr>
        </thead>
      </table>
    </form>
  );
}

export default AddNewTodo;
