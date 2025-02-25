import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { BookDetailsDto } from "../models/bookDetailsDto";
import apiConnector from "../api/apiConnector";
import { BookDto } from "../models/bookDto";


interface UpdateBookModalProps {
  book: BookDetailsDto;
  onClose: () => void;
  refreshBooks: () => void;
}

const UpdateBookModal: React.FC<UpdateBookModalProps> = ({ book, onClose ,refreshBooks}) => {
  const [formData, setFormData] = useState<BookDetailsDto>(book);

  useEffect(() => {
    setFormData(book);
  }, [book]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdateBook = async (id:number, newBook: BookDto) => { 
    const addedBook = await apiConnector.editBook(id, newBook);
    refreshBooks();
    return addedBook;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await handleUpdateBook(formData.id, formData); 
    onClose();

  }

  return (
    <dialog
      className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      open
    >
      <div className="modal-box p-5 bg-white shadow-lg rounded-lg relative">
        <form
          method="dialog"
          className="w-full h-auto border-2 p-5 rounded-md grid gap-3 mt-8"
          onSubmit={handleSubmit}
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          >
            <IoMdClose className="w-5 h-5" />
          </button>

          <h1 className="text-center text-xl font-semibold">Update Book</h1>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">
                Book Name <span className="text-red-600">*</span>
              </span>
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter Book Name"
              className="input w-full input-bordered"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">
                Author <span className="text-red-600">*</span>
              </span>
            </label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              placeholder="Enter Author's Name"
              className="input w-full input-bordered"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">
                Description <span className="text-red-600">*</span>
              </span>
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="textarea h-24 input-bordered"
              placeholder="Enter Book Description"
              required
            ></textarea>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <input
              type="text"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              placeholder="Enter Image URL"
              className="input w-full input-bordered"
            />
          </div>
          <button className="btn btn-outline btn-info w-full" type="submit">
            Update Book
          </button>
          <button className="btn btn-outline btn-ghost w-full" onClick={onClose}>
            Close
          </button>
        </form>
      </div>
    </dialog>
  );
};

export default UpdateBookModal;
