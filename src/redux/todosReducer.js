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

export const addTodoThunk = (todo) => {
    debugger
    return async dispatch => {
        debugger
        await fetch(`${API_URL}/todos`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(todo)
        });
        dispatch(addTodoCreator(todo));
    }
}

export const initTodosThunk = () => {
    debugger
    return async dispatch => {
        debugger
        const response = await fetch(`${API_URL}/todos`);
        const todos = await response.json();
        todos.forEach(todo => {
            dispatch(addTodoCreator(todo));
        });
    }
}

export default todosReducer;