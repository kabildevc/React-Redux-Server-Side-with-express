
import axios from 'axios';

export function doGet(url) {
    return axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(function (response) {
        return  response.data
    })
    .catch(function (error) {
        throw new Error(error)
    })
}