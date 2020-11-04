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
        case 'DELETE_TODO': {
            const deleted = [ ...state.todos ].filter(todo => {
                if(todo.id !== action.payload) {
                    return todo;
                }
            });
            state = {
                ...state,
                todos: deleted,
            };
            break;
        }
        default:
            return state;
    }
    return state;
}

export default todosReducer;