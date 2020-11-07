import React from 'react';
import { connect } from 'react-redux';

import styles from './footer.module.css';
import { deleteTodoThunk, editMainThunk } from '../../redux/actions';

function Footer(props) {
  function deleteCompletedTodos() {
    props.completedTodos.forEach(todo => {
      props.deleteTodoThunk(todo.id);
    });
  }

  function renderFooter() {
    return (
      <>
        <div className="cell left">{ props.notCompletedTodos.length } item left</div>
  
        <div className="cell center">
          <button 
            id="showAll" 
            onClick={ () => props.editMainThunk([{ id: 0, displayMode: 'all' }]) } 
            className={ props.displayMode === 'all' ? styles.active : null }>
          All</button>
  
          <button 
            id="showAlctive" 
            onClick={ () => props.editMainThunk([{ id: 0, displayMode: 'active' }]) }
            className={ props.displayMode === 'active' ? styles.active : null }>
          Active</button>
  
          <button 
            id="showCompleted" 
            onClick={ () => props.editMainThunk([{ id: 0, displayMode: 'completed' }]) }
            className={ props.displayMode === 'completed' ? styles.active : null }>
          Completed</button>
        </div>
  
        <div className="cell right">
          <button id="clearCompleted" onClick={ deleteCompletedTodos }>clear completed</button>
        </div>
      </>
    );
  }

  if(props.todos && props.todos.length) {
    return renderFooter();
  }

  return null;
}

const mapStateToProps = state => {
  return {
    todos: state.todosReducer.todos,
    notCompletedTodos: state.todosReducer.todos.filter(todo => todo.isCompleted === false),
    completedTodos: state.todosReducer.todos.filter(todo => todo.isCompleted === true),
    displayMode: state.mainReducer.main[0] && state.mainReducer.main[0].displayMode,
  }
}

export default connect(mapStateToProps, { deleteTodoThunk, editMainThunk })(Footer);