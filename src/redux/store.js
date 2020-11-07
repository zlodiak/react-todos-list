import { createStore, combineReducers, applyMiddleware } from 'redux';
import todosReducer from './todosReducer';
import headerReducer from './headerReducer';
import mainReducer from './mainReducer';
import thunkMiddleware from 'redux-thunk';

const store = createStore(combineReducers({
    todosReducer,
    headerReducer,
    mainReducer,
}), applyMiddleware(thunkMiddleware));

export default store;

store.subscribe(v => {
    // console.log(store.getState())
});

window.state = store.getState