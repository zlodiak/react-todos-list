import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { addTodoCreator } from '../../redux/todosReducer';

function Header(props) {
  const [title, setTitle] = useState('');
  const titleRef = React.createRef();
  const keyCodeEnter = 13;

  useEffect(() => {
    titleRef.current.addEventListener('keyup', addTodo);
    return () => titleRef.current.removeEventListener('keyup', addTodo);
  }, [])

  function addTodo(e) {
    console.log(title)
    if(e.keyCode === keyCodeEnter) {
      props.addTodoCreator({
        title: title,
        isCompleted: false,
        color: 0,
      });
    }
  }

  return (
    <>
      <input 
        type="text" 
        value={ title } 
        onChange={ e => setTitle(e.target.value) } 
        ref={ titleRef }
      />
    </>
  );
}

const mapStateToProps = state => {
  return {
    todos: state.todosReducer.todos
  }
}

export default connect(mapStateToProps, { addTodoCreator })(Header);