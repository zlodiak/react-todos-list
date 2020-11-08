import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import { initTodosThunk, initHeaderThunk, initMainThunk } from './redux/actions';
import { createUseStyles, ThemeProvider } from 'react-jss';

const useStyles = createUseStyles({
  body: {
    width: '400px',
    margin: 'auto',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    background: theme => theme.background,
  },
});

const theme = {
  background: "#f7df1e",
  color: "#24292e"
};

function App(props) {
  const classes = useStyles(theme);
  useEffect(() => {
    props.initTodosThunk();
    props.initHeaderThunk();
    props.initMainThunk();
  });

  return (
    <ThemeProvider theme={theme}>
      <div className={ classes.body }>
        <header>
          <Header/>
        </header>

        <main>
          <Main/>
        </main>

        <footer className={ classes.footer }>
          <Footer/>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default connect(null, { initTodosThunk, initHeaderThunk, initMainThunk })(App);
