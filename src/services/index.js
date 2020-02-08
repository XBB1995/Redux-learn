import axios from 'axios'

const ajax = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

export const getBlog = () => {
  return ajax.get('/posts')
}