import React from 'react';
import { connect } from 'react-redux';
import { editTodoThunk, deleteTodoThunk } from '../../redux/actions';

import styles from './main.module.css';

function Main(props) {
  function renderTodosList() {
    return props.todos.map((todo, i) => {
      return (
        <ul key={ i }>
          <li>
            <input 
              type="checkbox" 
              onChange={ e => toggleTodoStatus(todo) } 
              checked={ todo.isCompleted }
            />
            <span className={ todo.isCompleted ? styles.checked : null }>{ todo.title }</span>
            <span className={ styles.delete } onClick={ e => props.deleteTodoThunk(todo.id) }>X</span>
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

export default connect(mapStateToProps, { editTodoThunk, deleteTodoThunk })(Main);
