import { useQuery } from 'react-query';
import requestApi from '../services/requestApi';
import md5 from 'md5-hash';


const useQueryApi = (options, method, url) => {
    const secret = localStorage.getItem("secret");
    const md5hash = md5(`${method}${url}${secret}`);
    return useQuery(options,
        async () => requestApi({
            method: method,
            url: url,
            headers: {
                'Key': localStorage.getItem("key"),
                'Sign': md5hash,
            }
        })
    );
};

export default useQueryApi;