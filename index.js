import React, { Component } from 'react';
import uuid from 'uuid';
import { render } from 'react-dom';
import './style.css';

import Input from './components/Input/Input';
import Todos from './components/Todos/Todos';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        name: 'wash car',
        complete: false
      },
      {
        id: uuid.v4(),
        name: 'fix computer',
        complete: false
      }
    ],
    value: ''
  };

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => todo.id !== id)
    this.setState({
      todos
    })
  }

  onClick = () => {
    if (this.state.value !== '') {
      this.setState({
        todos: [
          ...this.state.todos,
          {
            id: uuid.v4(),
            name: this.state.value,
            complete: false
          }
        ],
        value: ''
      })
    }
  }

  onChange = (value) => {
    this.setState({ value: value });
  }

  render() {
    return (
      <div>
        <Input value={this.state.value} onChange={this.onChange} onClick={this.onClick} />
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
