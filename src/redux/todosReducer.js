import { getTodos, addTodo, editTodo } from '../API';

const todosReducer = function todosReducer(state = { todos: [] }, action) {
    switch(action.type) {
        case 'ADD_TODO': {
            state = {
                ...state,
                todos: [ ...state.todos, action.payload ],
            };
            break;
        }
        case 'EDIT_TODO': {
            const toggled = [ ...state.todos ].map(todo => {
                if(todo.id === action.payload.id) {
                    return action.payload;
                }
                return todo;
            });
            state = {
                ...state,
                todos: toggled,
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

export const editTodoCreator = todo => {
    return { type: 'EDIT_TODO', payload: todo }
}

export const editTodoThunk = (todo) => {
    return async dispatch => {
        await editTodo(todo);
        dispatch(editTodoCreator(todo));
    }
}

export const addTodoThunk = (todo) => {
    return async dispatch => {
        await addTodo(todo);
        dispatch(addTodoCreator(todo));
    }
}

export const initTodosThunk = () => {
    return async dispatch => {
        const todos = await getTodos;
        todos.forEach(todo => {
            dispatch(addTodoCreator(todo));
        });
    }
}

export default todosReducer;