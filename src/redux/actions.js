import { 
    getTodos, 
    addTodo, 
    editTodo, 
    deleteTodo, 
    getHeader, 
    editHeader 
} from '../API';

export const addTodoCreator = todo => {
    return { type: 'ADD_TODO', payload: todo }
}

export const editTodoCreator = todo => {
    return { type: 'EDIT_TODO', payload: todo }
}

export const deleteTodoCreator = id => {
    return { type: 'DELETE_TODO', payload: id }
}

export const editHeaderCreator = header => {
    return { type: 'EDIT_HEADER', payload: header }
}


export const editTodoThunk = (todo) => {
    return async dispatch => {
        const result = await editTodo(todo);
        if(result.ok) {
            dispatch(editTodoCreator(todo));
        }
    }
}

export const addTodoThunk = (todo) => {
    return async dispatch => {
        const result = await addTodo(todo);
        const todoWithId = await result.json();
        console.log(todoWithId)
        if(todoWithId) {
            dispatch(addTodoCreator(todoWithId));
        }
    }
}

export const deleteTodoThunk = (id) => {
    return async dispatch => {
        const result = await deleteTodo(id);
        if(result.ok) {
            dispatch(deleteTodoCreator(id));
        }
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

export const initHeaderThunk = () => {
    return async dispatch => {
        const header = await getHeader;
        dispatch(editHeaderCreator(header));
    }
}

export const editHeaderThunk = (header) => {
    return async dispatch => {
        // await editHeader(header);
        // if(!header) { return; }
        // dispatch(editHeaderCreator(header));
    }
}