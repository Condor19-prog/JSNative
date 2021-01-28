import axios from 'axios';

const configOMB = {
    baseURL: 'http://www.omdbapi.com',
};
const axiosInstance = axios.create(configOMB);
const key = '?apikey=3b0feb89';

const API = {
    searchFilmsByTitle: (title: string) => {
        const query = `${key}&s=${title}`
        return axiosInstance.get(query)
    },
    searchFilmsByType: (title: string, type: string) => {
    }
};


export default API;
