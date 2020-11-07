import { API_URL } from './config';


export const getMain = fetch(`${ API_URL }/main`)
    .then(response => response.json());

export const getHeader = fetch(`${ API_URL }/header`)
    .then(response => response.json());

export const getTodos = fetch(`${ API_URL }/todos`)
    .then(response => response.json());

export function addTodo(todo) {
    return fetch(`${ API_URL }/todos`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(todo)
    })    
}

export function editTodo(todo) {
    console.log(todo)
    return fetch(`${ API_URL }/todos/${ todo.id }`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(todo)
    });
}

export function deleteTodo(id) {
    return fetch(`${ API_URL }/todos/${ id }`, {
        method: 'DELETE',
    });
}

export function editHeader(header) {
    return fetch(`${ API_URL }/header/0`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(header[0])
    });
}

export function editMain(main) {
    return fetch(`${ API_URL }/main/0`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(main[0])
    });
}