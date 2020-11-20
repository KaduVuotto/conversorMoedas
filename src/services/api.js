import axios from 'axios';
// baseURL: https://free.currconv.com/api/v7/

//convert?q=USD_BRL&compact=ultra&apiKey=eb9a4869cf114bf7991a

const api = axios.create({
 baseURL: 'https://free.currconv.com/api/v7'
});

export default api; 