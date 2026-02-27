import { useState } from "react";
import "./TodoList.styles.css";

export default function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  console.log("todoList =>", todoList);
  const handleAddTodo = () => {
    if (todoInput) {
      setTodoList((prev) => [
        ...prev,
        {
          id: Date.now(),
          name: todoInput,
          completed: false,
        },
      ]);
    }
    setTodoInput("");
  };

  const handleCompleted = (index, checked) =>
    setTodoList((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], completed: checked };
      return updated;
    });

  const handleDelete = (id) => {
    setTodoList(() => todoList.filter((list) => list.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        name="todo"
        id="todo"
        placeholder="Enter todo"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAddTodo();
          }
        }}
      />

      <button onClick={handleAddTodo}>Add</button>

      <div>
        {todoList.map((todo, index) => (
          <div key={todo.id} className="todo-container">
            <input
              type="checkbox"
              id="check"
              checked={todo.completed}
              onChange={(e) => handleCompleted(index, e.target.checked)}
            />
            <span className={todo.completed ? "strikethrough" : ""}>
              {todo.name}
            </span>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
