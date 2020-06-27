import axios from "axios";

export default axios.create({
  baseURL: "http://192.168.100.156:8000/api/v1",
  headers: {
   Accept : 'application/json',
    "Content-Type": 'application/json'
  },
  withCredentials: false,
});