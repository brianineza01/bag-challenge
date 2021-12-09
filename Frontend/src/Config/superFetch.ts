import axios from "axios";
import { getToken } from "../Helpers/authHelper";
const baseURL = "http://localhost:8000/api/v1";

const user = getToken();

const superFetch = axios.create({ baseURL, headers: { token: user?.token! } });
export default superFetch;
