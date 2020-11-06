import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addTodoThunk, editHeaderThunk } from '../../redux/actions';

const Header = (props) => {
  const { addTodoThunk, editHeaderThunk, header } = props;

  const [title, setTitle] = useState('');

  const addTodo = e => {
    if (e.key === 'Enter') {
      addTodoThunk(title, () => setTitle(''));
    }
  };

  function toggleSelection() {
    const toggled = JSON.parse(JSON.stringify(header));
    toggled[0].isSelectAll = !toggled[0].isSelectAll;
    editHeaderThunk(toggled);
  }

  return (
    <>
      <input 
        type="checkbox" 
        checked={ header && header[0] && header[0].isSelectAll } 
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