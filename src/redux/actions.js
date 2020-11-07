import { 
    getTodos, 
    addTodo, 
    editTodo, 
    deleteTodo, 
    getHeader,  
    getMain,
    editMain,
    editHeader,
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

export const editMainCreator = main => {
    return { type: 'EDIT_MAIN', payload: main }
}


export const editTodoThunk = (todo) => {
    const todoCopy = { ...todo };
    todoCopy.isCompleted = !todoCopy.isCompleted;

    return async dispatch => {
        const result = await editTodo(todoCopy);
        if(result.ok) {
            dispatch(editTodoCreator(todoCopy));
        }
    }
}

export const addTodoThunk = (title, clearFieldCB) => {
    return async dispatch => {
        const result = await addTodo({
            title: title,
            isCompleted: false,
            color: 0,
        });
        const todoWithId = await result.json();
        if(todoWithId) {
            dispatch(addTodoCreator(todoWithId));
            clearFieldCB();
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

export const editMainThunk = main => {
    return async dispatch => {
        const result = await editMain(main);
        if(result.ok) { 
            dispatch(editMainCreator(main));
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

export const initMainThunk = () => {
    return async dispatch => {
        const main = await getMain;
        dispatch(editMainCreator(main));
    }
}

export const editHeaderThunk = (header, todos) => {
    const headerCopy = JSON.parse(JSON.stringify(header));
    headerCopy[0].isSelectAll = !headerCopy[0].isSelectAll;

    return async dispatch => {
        const result = await editHeader(headerCopy);
        if(!result.ok) { return; }
        dispatch(editHeaderCreator(headerCopy));

        todos.forEach(todo => {
            const todoCopy = { ...todo };
            todoCopy.isCompleted = headerCopy[0].isSelectAll;

            editTodo(todoCopy).then(result => {
                if(result.ok) {
                    dispatch(editTodoCreator(todoCopy));
                }
            })
        });
    }
}