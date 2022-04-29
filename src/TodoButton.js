import { useTodo } from './TodoContext';
import React from 'react';

export const TodoButton = () => {
  const { input, onSubmit } = useTodo();
  return (
    <button onClick={(e) => onSubmit(e)} disabled={input.length === 0}>
      Add
    </button>
  );
};
