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

export const setTodoCreator = todo => {
    return { type: 'ADD_TODO', payload: todo }
}

export default todosReducer;