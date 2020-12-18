// axios
import axios from 'axios'

const baseURL = 'http://localhost:8090/ivy'

export default axios.create({
  baseURL
  // You can add your headers here
})