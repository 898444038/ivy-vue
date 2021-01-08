// axios
import axios from 'axios'

const baseURL = 'http://localhost:8088/ivy'
// const baseURL = 'http://101.37.38.159:91/ivy'

export default axios.create({
  baseURL
  // You can add your headers here
})