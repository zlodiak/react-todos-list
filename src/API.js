import { API_URL } from './config';

export const getTodos = fetch(`${ API_URL }/todos`)
                            .then(response => response.json())