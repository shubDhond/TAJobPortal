import axios from "axios";

export let taCoordClient = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 3000
});

export let applicantClient = axios.create({
  baseURL: 'http://localhost:3003',
  timeout: 3000
});
