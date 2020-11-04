import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addTodoThunk, editHeaderThunk } from '../../redux/actions';

const Header = ({ addTodoThunk, editHeaderThunk, header }) => {
  const [title, setTitle] = useState('');

  const addTodo = e => {
    if (e.key === 'Enter') {
      addTodoThunk({
        title: title,
        isCompleted: false,
        color: 0,
      });
    }
  };

  function toggleSelection() {
    const toggled = { ...header };
    toggled[0].isSelectAll = !toggled[0].isSelectAll;
    editHeaderThunk(toggled);
  }

  return (
    <>
      { header && header[0] && header[0].isSelectAll }
      <input 
        type="checkbox" 
        checked={ header.length ? header[0].isSelectAll : null } 
        onChange={ toggleSelection }
      />
      <input
        type="text"
        value={ title }
        onChange={ (e) => setTitle(e.target.value) }
        onKeyUp={ addTodo }
      />    
    </>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todosReducer.todos,
    header: state.headerReducer.header,
  }
}

export default connect(mapStateToProps, { addTodoThunk, editHeaderThunk })(Header);