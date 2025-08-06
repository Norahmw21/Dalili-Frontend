import axios from 'axios'

const API = axios.create({
  baseURL: 'http://localhost:8080/api', // change if needed
  headers: {
    'Content-Type': 'application/json',
  },
})

// For authenticated requests, later you can add:
// API.defaults.headers.common['Authorization'] = 'Bearer ' + token

export default API