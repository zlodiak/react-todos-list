import { API_URL } from './config';

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
    return fetch(`${ API_URL }/todos/${ todo.id }`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(todo)
    });
}