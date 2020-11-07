import React from 'react';
import { connect } from 'react-redux';

function Footer(props) {
  return (
    <>
      <div class="cell left">{ props.todos.length } item left</div>

      <div class="cell center">
        <button id="showAll">All</button>
        <button id="showAlctive">Active</button>
        <button id="showCompleted">Completed</button>
      </div>

      <div class="cell right">
        <button id="clearCompleted">clear completed</button>
      </div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    todos: state.todosReducer.todos.filter(todo => todo.isCompleted === false)
  }
}

export default connect(mapStateToProps, {})(Footer);