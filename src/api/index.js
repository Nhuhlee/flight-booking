import axios from "axios";


export const api = axios.create( {
  //baseURL: "https://cybersoft-vexere-api.herokuapp.com/api",
  baseURL: "http://localhost:5000/api",
} );
