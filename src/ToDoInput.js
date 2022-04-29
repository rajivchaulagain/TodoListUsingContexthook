import React from 'react';
import { useTodo } from './TodoContext';
import { TodoButton } from './TodoButton';

export const ToDoInput = () => {
  const { todos, input, handleInput, resetAll } = useTodo();
  return (
    <>
      <input value={input} onChange={(e) => handleInput(e)} />
      <TodoButton />
      <button onClick={resetAll} disabled={todos.length === 0}>
        reset All
      </button>
    </>
  );
};
