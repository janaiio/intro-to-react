import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [
        { description: 'Walk the cat', isCompleted: true, isDeleted: onClick.target.value },
        { description: 'Throw the dishes away', isCompleted: false, isDeleted: onClick.target.value },
        { description: 'Buy new dishes', isCompleted: false, isDeleted: onClick.target.value }
      ],
      newTodoDescription: '',
      completedFilter: clickStatus === 'completed'
    };
  }

  handleChange(e) {
    this.setState({ newTodoDescription: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.newTodoDescription) { return }
    const newTodo = { description: this.state.newTodoDescription, isCompleted: false };
    this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: '' });
  }

  deleteTodo (e) {
    if (!this.state.deletedTodo) { return };
    const filteredTodo = { description: this.state.deletedTodo };
    this.setState({ todos: [this.state.todos, filteredTodo], deletedTodo: ''});
  }

  toggleComplete(index) {
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true;
    this.setState({ todos: todos });
  }

// The code below did not kick back any errors, but was also non-responsive.
// This is because `isDeleted` is not a defined property in this.state.
// Consider how this can be resolved by clickStatus in this.state.

//  deleteTodo (index) {
//    const todos = (!this.state.todos.filter((item) => item.isDeleted));
//    const todo = todos[index];
//    todo.isDeleted = todo.isDeleted ? false : true;
//    if (todo.isDeleted === 'true') {
//      return todos;
//    };
//    this.setState({ todos: todos });
//  }

  render() {
    return (
      <div className="App">
        <ul>
          { this.state.todos.map( (todo, index) =>
            <ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } toggleComplete={ () => this.toggleComplete(index) }/> //isDeleted={ todo.isDeleted }  deleteTodo={ () => this.deleteTodo(index) }/>
          )}
        </ul>
        <form onSubmit={ (e) => this.handleSubmit(e) } onClick={ (e) => this.deleteTodo(e) }>
          <input type="text" value={ this.state.newTodoDescription } onChange={ (e) => this.handleChange(e) }/>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
