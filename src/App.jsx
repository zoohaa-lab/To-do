import { useEffect, useState } from "react";
import Card from "./components/Card.jsx";
import { GetAllTodos, handleSubmitTodo } from "./helpers/todohelpers.jsx";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);
  const [statusMessage, setStatusMessage] = useState("");

  // Controlled input handlers
  function handleChangeInput(e) {
    setNewTodo(e.target.value);
  }

  function handleDescription(e) {
    setDescription(e.target.value);
  }

  function handleAddTodo() {
    if (!newTodo.trim()) {
      setStatusMessage("⚠️ Title cannot be empty");
      return;
    }

    handleSubmitTodo(newTodo, description, () => {
      setNewTodo("");
      setDescription("");
      setStatusMessage(`✅ Successfully added "${newTodo}"`);
    });
  }

  // Refresh list on any new change
  useEffect(() => {
    GetAllTodos(setTodos);
  }, [statusMessage]);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0d1b2a",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "#162a4d",
          padding: "30px 40px",
          borderRadius: "20px",
          width: "100%",
          maxWidth: "800px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center",
          color: "white",
        }}
      >
        <h1 style={{ margin: 0 }}>🗂️ Todo App</h1>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "center",
            width: "100%",
          }}
        >
          <p>{statusMessage}</p>
          <input
            style={inputStyle}
            placeholder="Title"
            value={newTodo}
            onChange={handleChangeInput}
          />
          <input
            style={inputStyle}
            type="text"
            placeholder="Description"
            value={description}
            onChange={handleDescription}
          />
          <button style={buttonStyle} onClick={handleAddTodo}>
            ➕ Add Todo
          </button>
        </div>

        <div style={todoListStyle}>
          {todos.map((todo) => (
            <Card
              key={todo.id}
              todo={todo}
              setRandomState={setStatusMessage}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Styling Constants
const inputStyle = {
  padding: "10px",
  width: "80%",
  maxWidth: "400px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "16px",
};

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#1f4172",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontSize: "16px",
  cursor: "pointer",
};

const todoListStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "1rem",
  width: "100%",
};

export default App;
