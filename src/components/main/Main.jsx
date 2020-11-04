import React from 'react';
import { connect } from 'react-redux';
import { editTodoThunk } from '../../redux/todosReducer';

function Main(props) {
  function renderTodosList() {
    return props.todos.map((todo, i) => {
      return (
        <ul key={ i }>
          <li>
            <input type="checkbox" onChange={ e => toggleTodoStatus(todo) }/>
            <span>{ todo.title }</span>
          </li>
        </ul>
      );
    });
  }

  function toggleTodoStatus(todo) {
    const toggledTodo = { ...todo };
    toggledTodo.isCompleted = !toggledTodo.isCompleted;
    props.editTodoThunk(toggledTodo);
  }

  return (
    <>
      { props.todos.length && renderTodosList() }
    </>
  );
}

const mapStateToProps = state => {
  return {
    todos: state.todosReducer.todos
  }
}

export default connect(mapStateToProps, { editTodoThunk })(Main);
