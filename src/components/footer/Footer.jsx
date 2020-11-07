import React from 'react';
import { connect } from 'react-redux';

import { deleteTodoThunk } from '../../redux/actions';

function Footer(props) {
  function deleteCompletedTodos() {
    props.completedTodos.forEach(todo => {
      props.deleteTodoThunk(todo.id);
    });
  }

  return (
    <>
      <div class="cell left">{ props.notCompletedTodos.length } item left</div>

      <div class="cell center">
        <button id="showAll">All</button>
        <button id="showAlctive">Active</button>
        <button id="showCompleted">Completed</button>
      </div>

      <div class="cell right">
        <button id="clearCompleted" onClick={ deleteCompletedTodos }>clear completed</button>
      </div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    notCompletedTodos: state.todosReducer.todos.filter(todo => todo.isCompleted === false),
    completedTodos: state.todosReducer.todos.filter(todo => todo.isCompleted === true),
  }
}

export default connect(mapStateToProps, { deleteTodoThunk })(Footer);