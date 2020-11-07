import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodoThunk, editHeaderThunk } from '../../redux/actions';

const Header = (props) => {
  const { addTodoThunk, editHeaderThunk, header, todos } = props;
  const [title, setTitle] = useState('');

  const addTodo = e => {
    if (e.key === 'Enter' && title.trim()) {
      addTodoThunk(title, () => setTitle(''));
    }
  };

  function renderGeneralCheckbox() {
    if(todos && !todos.length) { return null; }
    return (
      <input 
        type="checkbox" 
        checked={ header && header[0] && header[0].isSelectAll } 
        onChange={ () => editHeaderThunk(header, todos) }
      />  
    );
  }

  return (
    <>
      { renderGeneralCheckbox() }
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
    header: state.headerReducer.header,
    todos: state.todosReducer.todos,
  }
}

export default connect(mapStateToProps, { addTodoThunk, editHeaderThunk })(Header);