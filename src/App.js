import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import { initTodosThunk, initHeaderThunk, initMainThunk } from './redux/actions';
import { createUseStyles, ThemeProvider, useTheme } from 'react-jss';

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
  themeChcker: {
    position: 'fixed',
    top: 0,
    right: 0,
    border: '1px solid red',
    padding: '10px',
  }
});

const theme1 = {
  background: "#f7df1e",
  color: "#24292e"
};

const theme2 = {
  background: "maroon",
  color: "#fff"
};

function App(props) {
  const [contrast, setContrast] = useState(false);
  const classes = useStyles(contrast ? theme2 : theme1);

  useEffect(() => {
    props.initTodosThunk();
    props.initHeaderThunk();
    props.initMainThunk();
  });

  return (
    <ThemeProvider theme={contrast ? theme2 : theme1}>
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

      <div className={ classes.themeChcker }>
        <input type="checkbox" value={ contrast } onChange={ () => setContrast(!contrast) }/> Включить контрастную версию
      </div>
    </ThemeProvider>
  );
}

export default connect(null, { initTodosThunk, initHeaderThunk, initMainThunk })(App);
