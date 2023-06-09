import LoginImg from '../../assets/icon/login.svg';
import { useRef } from 'react';
import axios from 'axios';
import { notification } from 'antd';

import { useNavigate } from 'react-router-dom';

const Login = () => {
    const username = useRef('');
    const useremail = useRef("");
    const userkey = useRef('');
    const usersecret = useRef('');
    const navigate = useNavigate()

    function handlerLogin() {
        let userdata = {
            "name": username.current.value,
            "email": useremail.current.value,
            "key": userkey.current.value,
            "secret": usersecret.current.value
        };
        axios.post("https://no23.lavina.tech/signup", userdata)
            .then((res) => {
                // clearInput();
                notification.success({
                    message: "Muvaffaqiyatli Saqlandi!"
                });
               localStorage.setItem('secret', res?.data?.data?.secret);
               localStorage.setItem('key', res?.data?.data?.key);
               navigate('/books');
            })
            .catch((err) => {
                notification.error({
                    message: err?.response?.data?.message
                });
            });
    }

    return (
        <div className='w-full h-screen flex flex-row justify-between items-center bg-light'>
            <div className="w-[500px] h-full bg-white flex flex-col justify-center items-center">
                <p className='text-center mb-5 font-bold text-2xl'>Registratsiya</p>
                <div className='w-[348px] mx-auto DM-Sans mb-5'>
                    <input
                        ref={username}
                        type="text"
                        className='bg-light rounded-xl w-[348px] h-[50px] outline-none p-4 font-medium text-base text-dark border'
                        placeholder='username'
                    />
                </div>
                <div className='w-[348px] mx-auto DM-Sans'>
                    <input
                        ref={useremail}
                        type="email"
                        className='bg-light rounded-xl w-[348px] h-[50px] outline-none p-4 font-medium text-base text-dark mb-[38px] border'
                        placeholder='example@gmail.com'
                    />

                </div>
                <div className='w-[348px] mx-auto DM-Sans'>
                    <input
                        ref={userkey}
                        type="email"
                        className='bg-light rounded-xl w-[348px] h-[50px] outline-none p-4 font-medium text-base text-dark mb-[38px] border'
                        placeholder='user key'
                    />
                </div>
                <div className='w-[348px] mx-auto DM-Sans'>
                    <input
                        ref={usersecret}
                        type="email"
                        className='bg-light rounded-xl w-[348px] h-[50px] outline-none p-4 font-medium text-base text-dark mb-[38px] border'
                        placeholder='user secret'
                    />
                </div>
                <div className='w-[348px] mx-auto DM-Sans'>
                    <button
                        className='bg-slate-600 w-full text-white h-[50px] rounded-xl text-base active:bg-slate-400'
                        onClick={handlerLogin}
                        >
                        Sign Up
                    </button>
                </div>
            </div>
            <div className=''>
                <img className='w-[647px] mr-[157px]' src={LoginImg} alt="" />
            </div>
        </div>
    );
};


export default Login;



// const clearInput = () => {
//     username.current.value = "";
//     useremail.current.value = "";
//     userkey.current.value = "";
//     usersecret.current.value = "";
// }