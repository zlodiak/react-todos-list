import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import { initTodosThunk, initHeaderThunk, initMainThunk } from './redux/actions';
import './App.css';

function App(props) {
  useEffect(() => {
    props.initTodosThunk();
    props.initHeaderThunk();
    props.initMainThunk();
  });

  return (
    <div className="body">
      <header className="header">
        <Header/>
      </header>

      <main className="main">
        <Main/>
      </main>

      <footer className="footer">
        <Footer/>
      </footer>
    </div>
  );
}

export default connect(null, { initTodosThunk, initHeaderThunk, initMainThunk })(App);
