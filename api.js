import axios from "axios";

const api = axios.create({
   baseUR: 'https://flashcard-api-mayck.herokuapp.com/api'

});

export degault api;