import { connect } from 'react-redux';

import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import { addTodoCreator } from './redux/todosReducer';
import { getTodos } from './API';

function App(props) {
  function initStore() {
    if(props.todos.length) { return; }
    getTodos
      .then(todos => {
        console.log(todos);
        todos.forEach(todo => {
          props.addTodoCreator(todo);
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

export default connect(mapStateToProps, { addTodoCreator })(App);
