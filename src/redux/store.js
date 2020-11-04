import { createStore, combineReducers, applyMiddleware } from 'redux';
import todosReducer from './todosReducer';
import headerReducer from './headerReducer';
import thunkMiddleware from 'redux-thunk';

const store = createStore(combineReducers({
    todosReducer,
    headerReducer,
}), applyMiddleware(thunkMiddleware));

export default store;

store.subscribe(v => {
    console.log(store.getState())
});

window.state = store.getState