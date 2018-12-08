import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [
        { description: 'Walk the cat', isCompleted: true },
        { description: 'Throw the dishes away', isCompleted: false },
        { description: 'Buy new dishes', isCompleted: false }
      ],
      newTodoDescription: '',
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

//NEXT STEPS:
//deleteTodo (e) {
//Declare a variable to hold the new array,
//and assign it to the result of the filter.
//  const filteredTodos = (!this.state.todos.filter((item) => item.property))
  //"property" will need to be one from this.state.todos
  //aka description, isCompleted, newTodoDescription, or a newer one
//The filter should filter out the `todo` we want to delete.
//Return the resulting new array variable.
//  return filteredTodos();
//}

  deleteTodo (e) {
    if (!this.state.filteredTodo) { return };
    const remainTodo = { description: this.state.filteredTodo, isCompleted: false }; //true or false? };
    this.setState({ todos: [this.state.todos, remainTodo], filteredTodo: []});
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

  toggleComplete(index) {
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true;
    this.setState({ todos: todos });
  }

  render() {
    return (
      <div className="App">
        <ul>
          { this.state.todos.map( (todo, index) =>
            <ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } toggleComplete={ () => this.toggleComplete(index) }/>
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
