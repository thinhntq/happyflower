import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://localhost:1337`,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  GET(url) {
    return apiClient.get(url)
  },
//   POST(id) {
//     return apiClient.get('/events/' + id)
//   },
//   PUT(event) {
//     return apiClient.post('/events', event)
//   },
//   DELETE(event) {
//     return apiClient.post('/events', event)
//   },

}
