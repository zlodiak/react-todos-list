import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import { initTodosThunk, initHeaderThunk } from './redux/actions';

function App(props) {
  useEffect(() => {
    props.initTodosThunk();
    props.initHeaderThunk();
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

export default connect(null, { initTodosThunk, initHeaderThunk })(App);
