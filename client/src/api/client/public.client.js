import axios from "axios";
import queryString from "query-string";

const baseURL = "https://moonflix-api.vercel.app/api/v1/";
// const baseURL = "https://api.themoviedb.org/v3/"
// const TMDB_KEY="fcab31c703cd6474aacbba02de75102a"
// const baseURL = "https://127.0.0.1:5000/api/v1/"
// const baseURL = "http://192.168.0.109:3000/api/v1/"
 //const baseURL = "mongodb+srv://admin:admin123@cluster0.mpz5bkt.mongodb.net/MERN-app?retryWrites=true&w=majority/api/v1/"
const publicClient = axios.create({ 
  baseURL,
  // TMDB_KEY,
  paramsSerializer: {
    encode: params => queryString.stringify(params)
  }
});

publicClient.interceptors.request.use(async config => {
  return {
    ...config,
    headers: {
      "Content-Type": "application/json"
    }
  };
});

publicClient.interceptors.response.use((response) => {
  if (response && response.data) return response.data;
  return response;
}, (err) => {
  throw err.response.data;
});

export default publicClient;