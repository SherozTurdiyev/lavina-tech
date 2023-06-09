
const BookCard = (props) => {
    const book = props?.state || {}

    return (
        <div className="w-full h-[400px] border p-4 rounded-md hover:shadow-md overflow-y-auto">
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
