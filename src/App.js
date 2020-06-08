import React from "react";
import ToDoList from "./ToDo/ToDoList";
import Context from "./context";
import AddToDo from "./ToDo/AddToDo";

function App() {
  const [todos, setTodos] = React.useState([]);

  function toggleToDo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function removeToDo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function addToDo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false,
        },
      ])
    );
  }

  return (
    <Context.Provider value={{ removeToDo }}>
      <div className="wrapper">
        <h1>React ToDo App</h1>
        <AddToDo onCreate={addToDo} />
        {todos.length ? (
          <ToDoList todos={todos} onToggle={toggleToDo} />
        ) : (
          <p>No ToDos</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
