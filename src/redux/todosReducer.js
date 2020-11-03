import { API_URL } from '../config';

const todosReducer = function todosReducer(state = { todos: [] }, action) {
    switch(action.type) {
        case 'ADD_TODO': {
            state = {
                ...state,
                todos: [ ...state.todos, action.payload ],
            };
            break;
        }
        default:
            return state;
    }
    return state;
}

export const addTodoCreator = todo => {
    return { type: 'ADD_TODO', payload: todo }
}

export const getTodos = () => {
    return (dispatch) => {
        debugger
        return fetch(`${ API_URL }/todos`)
            .then(response => response.json())
            .then(todos => {
                todos.forEach(todo => {
                    addTodoCreator(todo);
                });
            });
    }
}

export default todosReducer;