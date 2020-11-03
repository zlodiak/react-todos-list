import { connect } from 'react-redux';

import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import { addTodoCreator, getTodos } from './redux/todosReducer';

function App(props) {
  getTodos();

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
