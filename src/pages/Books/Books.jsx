import { useEffect } from "react";
import BookCard from "./BookCard";
import Header from "../../components/Header";
import PageLoader from "../../components/shared/PageLoader/PageLoader";
import { useMutationApi } from "../../hooks/useMutationApi";
import useQueryApi from "../../hooks/useQueryApi";
import { notification } from 'antd';
import { useNavigate } from "react-router-dom";

const Books = () => {
    const { data:userdata } = useQueryApi('myself', "GET", "/myself");
    const navigate = useNavigate();
    const user = userdata?.data?.data;
    

    const mutation = useMutationApi("POST", "/books", `{"isbn":"9781118464465"}`);
    const { data, isLoading, refetch, error } = useQueryApi("books", "GET", '/books');
    useEffect(() => {
        refetch();
    }, [mutation.isSuccess]);

    let bookList = data?.data?.data || [];

    if (isLoading || mutation.isLoading) return <PageLoader />;
    if (error || mutation.error) { notification.error({ message: "Xatolik Buldi!" }); }

    return (
        <div>
            <Header />
            <div className="container flex justify-end py-5">
                <button
                    className="border bg-blue-600 text-white rounded-md py-2 px-5 text-lg active:bg-blue-500"
                    onClick={() => {
                        mutation.mutate({ "isbn": "9781118464465" });
                    }}
                >
                    Yangi kitob qo`shish
                </button>
            </div>
            <div className="container grid grid-cols-4 gap-6 py-10">
                {
                    bookList.map((item, i) => (
                        <div
                            key={i}
                            className="col-span-1"
                        >
                            <BookCard state={item} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Books;
