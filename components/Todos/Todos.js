import React from 'react';
import { FaTrashAlt } from 'react-icons/fa'
import './Todos.css';

import TodoItem from '../TodoItem/TodoItem'

const todos = ({ todos, deleteTodo }) => {

  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <li key={todo.id}>
          {todo.name}<span onClick={() => deleteTodo(todo.id)}><FaTrashAlt /></span>
        </li>
      )
    })
  ) : (
      <li style={{ textAlign: 'center' }}>No incomplete tasks. Awesome!</li>
    )

  return (
    <div className="todo-list">
      <h1>Incomplete Tasks</h1>
      <ul>
        {todoList}
      </ul>
    </div>
  )
}

export default todos;