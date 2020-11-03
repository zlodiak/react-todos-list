import { createStore, combineReducers, applyMiddleware } from 'redux';
import todosReducer from './todosReducer';
import thunkMiddleware from 'redux-thunk';

const store = createStore(combineReducers({
    todosReducer,
}), applyMiddleware(thunkMiddleware));

export default store;

store.subscribe(v => {
    console.log(store.getState())
});

window.state = store.getState