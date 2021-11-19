import axios from "axios";

const instance = axios.create({
  baseURL: 'https://flashcard-api-mayck.herokuapp.com/api'
  });

export default api;