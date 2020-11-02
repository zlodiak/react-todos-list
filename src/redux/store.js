import { createStore, combineReducers } from 'redux';
import todosReducer from './todosReducer';

const store = createStore(combineReducers({
    todosReducer,
}));

export default store;

store.subscribe(v => {
    console.log(store.getState())
});

window.state = store.getState