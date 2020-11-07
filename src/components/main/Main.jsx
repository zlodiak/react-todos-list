import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { editTodoThunk, deleteTodoThunk } from '../../redux/actions';

import styles from './main.module.css';

function Main(props) {
  const [todos, setTodos] = useState();

  useEffect(() => {
    if(props.main[0]) {
      if(props.main[0].displayMode === 'completed') {
        const todos = props.todos.filter(todo => todo.isCompleted);
        setTodos(todos);
      } else if(props.main[0].displayMode === 'active') {
        const todos = props.todos.filter(todo => !todo.isCompleted);
        setTodos(todos);
      } else if(props.main[0].displayMode === 'all') {
        const todos = props.todos;
        setTodos(todos);
      }
    }
  }, [props.todos]);

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
            { props && props.main && props.main[0].displayMode }
          </li>
        </ul>
      );
    });
  }

  return (
    <>
      { todos && todos.length && renderTodosList() }
    </>
  );
}

const mapStateToProps = state => {
  return {
    todos: state.todosReducer.todos,
    main: state.mainReducer.main,
  }
}

export default connect(mapStateToProps, { editTodoThunk, deleteTodoThunk })(Main);
