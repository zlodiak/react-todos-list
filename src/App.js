import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import { initTodosThunk } from './redux/todosReducer';

function App(props) {
  useEffect(() => {
    props.initTodosThunk();
  }, []);

  return (
    <>
      <header>
        <Header/>
      </header>

      <main>
        <Main/>
      </main>

      <footer>
        <Footer/>
      </footer>
    </>
  );
}

const mapStateToProps = state => {
  return {
    todos: state.todosReducer.todos
  }
}

export default connect(mapStateToProps, { initTodosThunk })(App);
