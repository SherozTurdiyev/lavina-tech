import axios from 'axios';
// import md5  from 'md5-hash';

const requestApi = axios.create({
    baseURL: "https://no23.lavina.tech",
});


requestApi.interceptors.response.use(
    (res) => {
        return res;
    },
    (err) => {
        return err;
    }
);


export default requestApi;