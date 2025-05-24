import React from 'react';
import { handleCompleteTodo, handleDeleteTodo } from '../helpers/todohelpers';
import { FaTrashAlt, FaCheckCircle } from 'react-icons/fa'; 

function Card({ todo, setRandomState }) {
  return (
    <div
      style={{
        backgroundColor: '#1b263b',
        color: '#ffffff',
        borderRadius: '12px',
        width: '250px',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '10px',
      }}
    >
      {/* Title and Delete Icon */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ fontSize: '1.1rem', margin: 0 }}>{todo.title}</h3>
        <FaTrashAlt
          onClick={() => handleDeleteTodo(todo.id, todo.name, setRandomState)}
          style={{
            color: '#e63946',
            cursor: 'pointer',
            fontSize: '1rem',
          }}
          title="Delete" />
      </div>

      {/* Description */}
      <p style={{ fontSize: '0.9rem', color: '#cbd5e1', marginTop: 0 }}>
        {todo.description}
      </p>

      {/* Completion Button */}
      {todo.isCompleted ? (
        <p style={{ color: '#6bcf64', fontWeight: 'bold' }}>✔ Completed</p>
      ) : (
        <button
          onClick={() => handleCompleteTodo(todo.id, todo.name, setRandomState)}
          style={{
            backgroundColor: '#2a9d8f',
            border: 'none',
            borderRadius: '6px',
            padding: '8px',
            color: 'white',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          <FaCheckCircle style={{ marginRight: '5px' }} />
          Mark as Done
        </button>
      )}
    </div>
  );
}

export default Card;


