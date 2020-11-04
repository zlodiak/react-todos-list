import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { addTodoThunk, editHeaderThunk } from '../../redux/actions';

const Header = (props) => {
  const { addTodoThunk, editHeaderThunk, header } = props;

  const [title, setTitle] = useState('');
  console.log(header)

  useEffect(() => {
    console.log(12)
  }, [header]);

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
    editHeaderThunk(toggled[0]);
  }

  return (
    <>
      { header && header[0] && header[0].isSelectAll.toString() }
      <input 
        type="checkbox" 
        checked={ false } 
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