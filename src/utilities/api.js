import axios from 'axios'

const API = axios.create({
  baseURL: 'http://localhost:8080/api', // change if needed
  headers: {
    'Content-Type': 'application/json',
  },
})


export default API