import React from 'react';
import { connect } from 'react-redux';

function Main(props) {
  function renderTodosList() {
    return props.todos.map((todo, i) => {
      return (
        <ul key={ i }>
          <li>
            <input type="checkbox"/>
            <span>{ todo.title }</span>
          </li>
        </ul>
      );
    });
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

export default connect(mapStateToProps, {})(Main);
