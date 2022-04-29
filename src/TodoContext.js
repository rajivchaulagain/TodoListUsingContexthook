import { createContext, useState, useContext } from 'react';
import React from 'react';

const TodoValue = createContext(null);

export const TodoContext = ({ children }) => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([{ id: 1, title: 'todoList' }]);
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { id: 1, title: input }]);
    setInput('');
  };

  return (
    <TodoValue.Provider value={{ input, todos, handleInput, onSubmit }}>
      {children}
    </TodoValue.Provider>
  );
};
export const useTodo = () => useContext(TodoValue);
