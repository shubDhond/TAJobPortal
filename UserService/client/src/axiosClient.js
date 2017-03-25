import axios from "axios";

export let taCoordClient = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 1000
});