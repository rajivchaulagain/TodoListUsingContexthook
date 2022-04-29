import React, { useContext } from 'react';
import { useTodo } from './TodoContext';

export const TodoList = () => {
  const { todos } = useTodo();
  return (
    <ul>
      {todos?.map((item) => (
        <li>{item?.title}</li>
      ))}
    </ul>
  );
};
