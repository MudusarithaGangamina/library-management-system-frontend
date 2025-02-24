import React from "react";
import { IoMdClose } from "react-icons/io";
import noBook from "../assets/nobook.png";
import { BookDetailsDto } from "../models/bookDetailsDto";

interface BookCardProps {
  book: BookDetailsDto;
  onClose: () => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, onClose }) => {
  return (
    <>
      <dialog
        className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        open
      >
        <div className="modal-box p-5 bg-white shadow-lg rounded-lg relative">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          >
            <IoMdClose className="w-5 h-5" />
          </button>
          <div className="card bg-base-100 shadow-xl mt-5">
            <figure>
              <img
                src={book.imageUrl || noBook}
                alt="Book"
                className="w-[50%] h-auto object-fill"
              />
            </figure>
            <div className="card-body">
              <h1 className="text-center text-xl font-semibold">
                {book.title}
              </h1>
              <h2 className="text-center text-base text-gray-600 mb-2">
                {book.author}
              </h2>
              <p className="text-sm">{book.description}</p>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default BookCard;
