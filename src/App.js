import React from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

class ToDo extends React.Component {
  constructor () {
    super();
    this.state = {
      items: [],
      item: ''
    };
    this._addToDo = this._addToDo.bind(this);
    this._update = this._update.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
  }

  _addToDo(item) {
    this.setState({ items: this.state.items.concat([item]) });
  }

  _update(e) {
    this.setState({ item: e.target.value });
  }

  _onSubmit(e) {
    e.preventDefault();
    this._addToDo(this.state.item);
    this.setState({ item: '' })
  }

  render () {
    return (
      <div>
        <h1>ToDo App</h1>
        <ToDoForm item={this.state.item} handleSubmit={this._onSubmit} handleChange={this._update}/>
        <ToDoList items={this.state.items}/>
      </div>
    )
  }
}

export default ToDo;