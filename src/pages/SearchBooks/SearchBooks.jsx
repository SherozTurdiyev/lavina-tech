import BookCard from './BookCard/index';
import PageLoader from '../../components/shared/PageLoader/PageLoader';
import QueryHook from '../../hooks/QueryHook';
import useQueryApi from '../../hooks/useQueryApi';

const SearchBooks = () => {
    const { QueryParams } = QueryHook();
    const { title } = QueryParams;
    console.log(QueryParams);
    const { data, isLoading } = useQueryApi('search', "GET", `/books/${title}`);
    const bookList = data?.data?.data || []

    console.log(isLoading);
    if (isLoading) {return <PageLoader />; }
    return (
        <div>
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

export default SearchBooks;
