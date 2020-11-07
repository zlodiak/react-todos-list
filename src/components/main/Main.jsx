import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { editTodoThunk, deleteTodoThunk } from '../../redux/actions';

import styles from './main.module.css';

function Main(props) {
  const [todos, setTodos] = useState();

  useEffect(() => {
    if(props.main[0]) {
      switch(props.main[0].displayMode) {
        case 'active':
          setTodos(props.todosActive);
          break;
        case 'completed':
          setTodos(props.todosCompleted);
          break;
        default:
          setTodos(props.todos);
      }
    }
  }, [props]);

  function renderTodosList() {
    return todos.map((todo, i) => {
      return (
        <ul key={ i }>
          <li>
            <input 
              type="checkbox" 
              onChange={ e => props.editTodoThunk(todo) } 
              checked={ todo.isCompleted }
            />
            <span className={ todo.isCompleted ? styles.checked : null }>{ todo.title }</span>
            <span className={ styles.delete } onClick={ e => props.deleteTodoThunk(todo.id) }>X</span>
          </li>
        </ul>
      );
    });
  }

  return (
    <>
      { (() => { if(todos && todos.length) { return renderTodosList(); } })() }
      { todos && !todos.length && 'No todos' }
    </>
  );
}

const mapStateToProps = state => {
  return {
    todos: state.todosReducer.todos,
    todosActive: state.todosReducer.todos.filter(todo => !todo.isCompleted),
    todosCompleted: state.todosReducer.todos.filter(todo => todo.isCompleted),
    main: state.mainReducer.main,
  }
}

export default connect(mapStateToProps, { editTodoThunk, deleteTodoThunk })(Main);
