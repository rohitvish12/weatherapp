

import axios from 'axios';

const URL = 'http://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'cfd76c782d4d601b6366c348f734464a';

export const getData = async (city, country) =>{
    return await axios.get(`${URL}?q=${city}, ${country}&appid=${API_KEY}&units=metric`)
}