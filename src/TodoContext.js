import { createContext, useState, useContext } from 'react';
import React from 'react';

const TodoValue = createContext(null);

export const TodoContext = ({ children }) => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { id: input, title: input }]);
    setInput('');
  };

  const deleteTodo = (id) => {
    const filter = todos.filter((item) => item.id !== id);
    setTodos(filter);
  };

  const resetAll = () => {
    setTodos([]);
  };

  return (
    <TodoValue.Provider
      value={{ input, todos, handleInput, onSubmit, deleteTodo, resetAll }}
    >
      {children}
    </TodoValue.Provider>
  );
};
export const useTodo = () => useContext(TodoValue);
