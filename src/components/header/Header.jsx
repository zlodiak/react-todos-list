import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { addTodoCreator } from '../../redux/todosReducer';

const Header = ({ addTodoCreator }) => {
  const [title, setTitle] = useState('');

  const addTodo = e => {
    if (e.key === 'Enter') {
      addTodoCreator({
        title: title,
        isCompleted: false,
        color: 0,
      });
    }
  };

  return (
    <input
      type="text"
      value={ title }
      onChange={ (e) => setTitle(e.target.value) }
      onKeyUp={ addTodo }
    />
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todosReducer.todos
  }
}

export default connect(mapStateToProps, { addTodoCreator })(Header);