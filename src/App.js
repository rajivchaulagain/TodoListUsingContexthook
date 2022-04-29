import React from 'react';
import './style.css';
import { ToDoInput } from './ToDoInput';
import { TodoContext } from './TodoContext';
import {TodoList} from './TodoList'

export default function App() {
  return (
    <TodoContext>
      <ToDoInput />
      <TodoList />
    </TodoContext>
  );
}
