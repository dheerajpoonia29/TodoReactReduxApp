import React from "react";
import { useSelector } from "react-redux";
import RemoveButton from "./RemoveTodo";
import UpdateTodo from "./UpdateTodo";

function ListAllTodo() {
  const todos = useSelector((state) => state.todos);
  return (
    <div>
      <table id="todo-list">
        <thead>
          <tr>
            <th>Task</th>
            <th>Status</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => {
            // console.log('todo text = '+todo.text)
            return (
              <tr key={todo.id}>
                <td>{todo.text}</td>
                <td>
                  <UpdateTodo todo={todo} />
                </td>
                <td>
                  <RemoveButton todoId={todo.id} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ListAllTodo;
