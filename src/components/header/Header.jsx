import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodoThunk } from '../../redux/actions';

const Header = (props) => {
  const { addTodoThunk } = props;
  const [title, setTitle] = useState('');

  const addTodo = e => {
    if (e.key === 'Enter' && title.trim()) {
      addTodoThunk(title, () => setTitle(''));
    }
  };

  return (
    <>
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
  }
}

export default connect(mapStateToProps, { addTodoThunk })(Header);