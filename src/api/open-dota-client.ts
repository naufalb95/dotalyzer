import axios from 'axios'

const openDotaClient = axios.create({
  baseURL: import.meta.env.VITE_OPENDOTA_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default openDotaClient
