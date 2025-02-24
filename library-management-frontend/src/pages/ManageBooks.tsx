import { useEffect, useState } from "react";
//import { bookList } from "../constants";
import noBook from "../assets/nobook.png";
import UpdateBookModal from "../components/UpdateBookModal";
import DeleteBookModal from "../components/DeleteBookModal";
import BookCard from "../components/BookCard";
import { BookDetailsDto } from "../models/bookDetailsDto";
import apiConnector from "../api/apiConnector";

const ManageBooks = () => {
  const [books, setBooks] = useState<BookDetailsDto[]>([]);
  const [bookToUpdate, setBookToUpdate] = useState<BookDetailsDto | null>(null);
  const [bookToDelete, setBookToDelete] = useState<BookDetailsDto | null>(null);
  const [bookToView, setBookToView] = useState<BookDetailsDto | null>(null);

  const fetchData = async () => {
    const fetchedBooks = await apiConnector.getBooks();
    console.log('Fetched Books:', fetchedBooks);
    setBooks(fetchedBooks);
}

  useEffect(() =>{

    fetchData();
},[]);

  const handleEditClick = (book: BookDetailsDto) => {
    setBookToUpdate(book);
  };

  const handleDeleteClick = (book: BookDetailsDto) => {
    setBookToDelete(book);
  };

  const handleViewClick = (book: BookDetailsDto) => {
    setBookToView(book);
  };

  return (
    <>
      <div className="overflow-x-auto xs:px-5 sm:px-10 sd:px-16 xl:px-24 mt-5">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Book</th>
              <th>Description</th>
              <th>Author</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.length > 0 ? (
              books.map((book) => (
                <tr key={book.id}>
                  <td>#{book.id}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={book.imageUrl ? book.imageUrl : noBook} />
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold">{book.title}</div>
                      </div>
                    </div>
                  </td>
                  <td className="font-normal max-w-96 overflow-hidden text-ellipsis whitespace-nowrap">
                    {book.description}
                  </td>
                  <td>{book.author}</td>
                  <td>
                    <button
                      className="btn btn-outline btn-info btn-xs mr-2 mb-2 2xl:mb-0"
                      onClick={() => handleViewClick(book)}
                    >
                      View
                    </button>
                    <button
                      className="btn btn-outline btn-warning btn-xs mr-2 mb-2 2xl:mb-0"
                      onClick={() => handleEditClick(book)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-outline btn-error btn-xs"
                      onClick={() => handleDeleteClick(book)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center">
                  No Books Available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {bookToUpdate && (
        <UpdateBookModal
          book={bookToUpdate}
          onClose={() => setBookToUpdate(null)}
          refreshBooks={fetchData}
        />
      )}

      {bookToDelete && (
        <DeleteBookModal
          bookTitle={bookToDelete.title}
          bookId={bookToDelete.id}
          onClose={() => setBookToDelete(null)}
          setBookToDelete={setBookToDelete}
          refreshBooks={fetchData}
        />
      )}

      {bookToView && (
        <BookCard book={bookToView} onClose={() => setBookToView(null)} />
      )}
    </>
  );
};

export default ManageBooks;
