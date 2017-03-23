import axios from "axios";

export let applicantServiceClient = axios.create({
  baseURL: 'http://localhost:3003',
  timeout: 1000
});