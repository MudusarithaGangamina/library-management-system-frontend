import axios, { AxiosResponse } from "axios";
import { BookDetailsDto } from "../models/bookDetailsDto";
import {API_BASE_URL} from "../../config"
import { BookDto } from "../models/bookDto";
import { toast } from "react-toastify";

const getToken = (): string | null => {
    return localStorage.getItem('token');
};

const apiConnector = {
    getBooks: async(): Promise<BookDetailsDto[]> => {
        try{
            const token = getToken();
            const response: AxiosResponse<BookDetailsDto[]> =
                await axios.get(`${API_BASE_URL}/Books`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                return response.data;

        }catch(error){
            console.log('Error fetching Books: ', error);
            throw error;
        }
    },

    createBook: async (book: BookDto): Promise<void> => {
        try{
            const token = getToken();
            await axios.post<number>(`${API_BASE_URL}/Books`, book, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            toast.success("Book created successfully!");
        }catch(error){
            console.log(error);
            toast.error("Error creating book!");
            throw error;
        }
    },

    editBook: async (bookId: number, book: BookDto): Promise<void> => {
        try{
            const token = getToken();
            await axios.put<number>(`${API_BASE_URL}/Books/${bookId}`, book, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            toast.success("Book updated successfully!"); 
        }catch(error){
            console.log(error);
            toast.error("Error updating book!");
            throw error;
        }
    },

    deleteBook: async (bookId: number): Promise<void> => {
        try{
            const token = getToken();
            await axios.delete<number>(`${API_BASE_URL}/Books/${bookId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            toast.success("Book deleted successfully!");
        }catch(error){
            console.log(error);
            toast.error("Error deleting book!"); 
            throw error;
        }
    },
}

export default apiConnector;