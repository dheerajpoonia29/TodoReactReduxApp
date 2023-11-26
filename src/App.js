import "./App.css";
// import {AddTodo} from './components/AddTodo'
import AddNewTodo from "./components/AddNewTodo";
import ListAllTodo from "./components/ListAllTodo";

function App() {
  return (
    <div className="App">
      <div id="todo-container">
        <h1>Todo List</h1>
        <AddNewTodo />
        <ListAllTodo />
      </div>
    </div>
  );
}

export default App;
