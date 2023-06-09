import { Tooltip } from '@mui/material';
import { useRef } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BsBookHalf, BsSearch } from 'react-icons/bs';
import { RxExit } from 'react-icons/rx';
import { Link, useNavigate } from 'react-router-dom';

const nav_items = [
    {
        icons: <AiFillHome />,
        title: "Bosh sahifa",
        path: "/"
    },
    {
        icons: <BsBookHalf />,
        title: "Mening Kitoblarim",
        path: "/"
    }
];

const Navbar = () => {
    const searchBook = useRef('');
    const navigate = useNavigate();
    const userKey = localStorage.getItem('key');
    const usersecret = localStorage.getItem('secret');


    return (
        <div className="container py-3 flex justify-between items-center">
            <img
                src="https://scontent.ftas2-1.fna.fbcdn.net/v/t39.30808-6/306785334_458555372954827_8849315241560412998_n.png?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ZX_G40E9fPQAX9l4Hct&_nc_ht=scontent.ftas2-1.fna&oh=00_AfDPV6eSbWA7g6CtWi_RYpxCskTRtdmWnPd4duhtG8NanA&oe=6486B216"
                alt="Lavina Tech"
                className="w-[80px] h-[80px]"
            />
            {
                (userKey && usersecret) ?
                    <>
                        <ul className='flex justify-center gap-5'>
                            {
                                nav_items.map((item, i) => (
                                    <li
                                        key={i}

                                    >
                                        <Link
                                            className="flex items-center gap-2 font-semibold text-xl hover:text-blue-300 duration-100"
                                            to={item.path}
                                        >
                                            {item.icons}
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className='flex items-center relative'>
                            <BsSearch
                                className='text-2xl absolute right-14'
                                onClick={() => {
                                    navigate(`/books/search?title=${searchBook.current.value}`);
                                }}
                            />
                            <input
                                ref={searchBook}
                                className='border-b outline-none bg-blue-50 py-2 pl-4 pr-[50px] w-[300px] rounded-t' type="search"
                            />
                            <Tooltip title="Chiqish">
                                <RxExit
                                    className='text-2xl ml-4'
                                    onClick={() => {
                                        localStorage.removeItem("key");
                                        localStorage.removeItem("secret");
                                        window.location.reload();
                                    }}
                                />
                            </Tooltip>
                        </div>
                    </>
                    :
                    <></>
            }
        </div>
    );
};

export default Navbar;
