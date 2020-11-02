import { connect } from 'react-redux';

import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import { setTodoCreator } from './redux/todosReducer';

function App(props) {
  function initStore() {
    if(props.todos.length) {
      return;
    }

    fetch('http://localhost:3001/todos')
    .then(response => response.json())
    .then(todos => {
      console.log(todos);
      todos.forEach(todo => {
        props.setTodoCreator(todo);
      });
    });
  }

  initStore();

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

export default connect(mapStateToProps, { setTodoCreator })(App);
