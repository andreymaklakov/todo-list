import { useDispatch } from "react-redux";

import InputForm from "./components/InputForm";
import List from "./components/List";
import Counter from "./components/Counter";
import Filter from "./components/Filter";

import { loadTodoList } from "./store/todoList";

function App() {
  const dispatch = useDispatch();

  const todos = localStorage.getItem("todos");

  if (todos) {
    dispatch(loadTodoList(todos));
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Todo List</h1>
      </header>

      <InputForm />

      <div className="inline-items">
        <Filter />
        <Counter />
      </div>

      <List />
    </div>
  );
}

export default App;
