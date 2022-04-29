import React, { useContext } from 'react';
import { useTodo } from './TodoContext';

export const TodoList = () => {
  const { todos, deleteTodo } = useTodo();
  return (
    <ul>
      {todos.length === 0 && <p>Add Todos</p>}
      {todos?.map((item) => (
        <>
          <li>{item?.title}</li>
          <button onClick={() => deleteTodo(item.id)}>x</button>
        </>
      ))}
    </ul>
  );
};
