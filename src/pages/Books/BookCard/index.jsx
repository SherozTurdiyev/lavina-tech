import Events from './Events'

const BookCard = (props) => {
    const book = props?.state?.book || {};
    const status = props?.state?.status;

    function CheckStatus() {
        if (status == 0) {
            return <h1 className='text-lg text-green-800 font-bold'>NEW</h1>;
        }
        if (status == 1) {
            return <h1 className='text-lg text-green-800 font-bold'>READING</h1>;
        }
        if (status == 2) {
            return <h1 className='text-lg text-green-800 font-bold'>FINISHED</h1>;
        }
    }

    return (
        <div className="w-full h-[400px] border p-4 pt-0 rounded-md hover:shadow-md relative">

            <div className='flex justify-between'>
                <CheckStatus />
                <Events id={book.id} />
            </div>
            <img
                src={book.cover}
                alt={name}
                className="mx-auto w-full rounded-md h-[250px]"
            />
            <p className="text-secondary py-1 font-semibold text-xl">{book.title}</p>
            <p className="text-[#8A8988]">{book.author}</p>
            <p className="text-[#8A8988]">{book.published}</p>
        </div>
    );
};

export default BookCard;
