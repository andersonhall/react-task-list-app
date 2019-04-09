import React from 'react';

import './Input.css'

const input = props => {

  const handleChange = (e) => {
    props.onChange(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onClick
  } 

  return (
    <form onSubmit={handleSubmit} className="todo-input">
      <input type="text" placeholder="Add a task..." onChange={handleChange} value={props.value} />
      <button onClick={props.onClick}><span>&#43;</span></button>
    </form>
  )
}

export default input;