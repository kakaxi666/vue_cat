import axios from "axios";

const requests = axios.create({
    baseURL:"http://49.233.108.173:80",
    // baseURL:"http://127.0.0.1:5000",
    timeout:5000
})

export default requests