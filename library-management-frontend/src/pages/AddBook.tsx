import { useState } from "react";
import { BookDto } from "../models/bookDto";
import apiConnector from "../api/apiConnector";

const AddBook = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    imageUrl: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddBook = async (newBook: BookDto) => { 
    const addedBook = await apiConnector.createBook(newBook);
    return addedBook;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await handleAddBook(formData); 
    setFormData({ title: "", author: "", description: "",imageUrl:"" }); 

  }

  return (
    <>
      <div className="xs:px-5 sm:px-10 sd:px-16 xl:px-24 py-10 bg-amber-500 flex items-center justify-center">
        <form className="w-full h-auto border-2 xs:p-5 md:p-10 rounded-md grid bg-white shadow-xl gap-5 max-w-xl" onSubmit={handleSubmit}>
          <h1 className="text-center text-xl font-semibold">Add New Book</h1>
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
            Add Book
          </button>
          <button className="btn btn-outline btn-ghost w-full" type="reset" onClick={() => setFormData({ title: "", author: "", description: "", imageUrl: "" })}>
            Clear
          </button>
        </form>
      </div>
    </>
  );
};

export default AddBook;
