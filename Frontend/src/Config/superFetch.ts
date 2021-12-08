import axios from "axios";
const baseURL = "http://localhost:8000/api/v1";
const superFetch = axios.create({ baseURL });

export default superFetch;
