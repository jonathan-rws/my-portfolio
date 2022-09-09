import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://formsubmit.co/ajax/',
  headers: { 'Content-Type': 'aplication/json' },
})
