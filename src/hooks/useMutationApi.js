import { useMutation } from "react-query";
import requestApi from "../services/requestApi";
import md5 from 'md5-hash';

export const useMutationApi = (method, url , body="") => {
    const key = localStorage.getItem("key");
    const secret = localStorage.getItem("secret");
    const md5hash = md5(`${method}${url}${body}${secret}`);
    // console.log(`${method}${url}${body}${secret}`);
    return (
        useMutation(
            (variable) => {
                return requestApi({
                    method,
                    url,
                    data: variable,
                    headers: {
                        'Key': key,
                        'Sign': md5hash,
                    }
                });
            })
    );
};