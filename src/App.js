import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import { initTodosThunk, initHeaderThunk } from './redux/actions';
import './App.css';

function App(props) {
  useEffect(() => {
    props.initTodosThunk();
    props.initHeaderThunk();
  }, []);

  return (
    <div class="body">
      <header class="header">
        <Header/>
      </header>

      <main class="main">
        <Main/>
      </main>

      <footer class="footer">
        <Footer/>
      </footer>
    </div>
  );
}

export default connect(null, { initTodosThunk, initHeaderThunk })(App);
