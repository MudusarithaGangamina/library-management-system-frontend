import { IoMdClose } from "react-icons/io";
import { BookDetailsDto } from "../models/bookDetailsDto";
import apiConnector from "../api/apiConnector";


interface DeleteBookModalProps {
  bookTitle: string;
  bookId: number;
  onClose: () => void;
  setBookToDelete: React.Dispatch<React.SetStateAction<BookDetailsDto | null>>;
  refreshBooks: () => void;
}

const DeleteBookModal: React.FC<DeleteBookModalProps> = ({
  bookTitle,
  bookId,
  onClose,
  setBookToDelete,
  refreshBooks
}) => {
  const handleConfirmDelete = async() => {
    if (bookId) {
      console.log(`Deleted book ID: ${bookId}`);
      const deletedBookId = await apiConnector.deleteBook(bookId);
      refreshBooks();
      setBookToDelete(null);
      onClose();
      return deletedBookId;
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-10 rounded-lg shadow-lg w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <IoMdClose className="w-5 h-5" />
        </button>
        <h2 className="text-lg font-semibold text-center">Are you sure?</h2>
        <p className="text-center text-gray-600 mt-2">
          Do you really want to delete <strong>{bookTitle}</strong>?
        </p>
        <div className="flex justify-between mt-5">
          <button
            onClick={handleConfirmDelete}
            className="btn btn-error flex-1 mr-2"
          >
            Yes, Delete
          </button>
          <button onClick={onClose} className="btn btn-outline btn-gray flex-1">
            No, Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteBookModal;
