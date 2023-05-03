import axios from 'axios'

const API_URL = 'http://127.0.0.1:8000/tasks/api/v1/tasks/'

export function getTasks() {
  return axios.get(API_URL)
}

export function newTask(task) {
  return axios.post(API_URL, task)
}

export function getTask (id) {
  return axios.get(`${API_URL}${id}/`)
}

export function deleteTask(id) {
  return axios.delete(`${API_URL}${id}`)
}

export function updateTask(id, task) {
  return axios.put(`${API_URL}${id}/`, task)
}