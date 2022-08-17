import axios from 'axios';
const axiosClient = axios.create({
    baseURL: 'https://training.softech.cloud/api/training/users/',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
});
export default axiosClient;