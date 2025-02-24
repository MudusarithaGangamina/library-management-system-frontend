import axios, { AxiosResponse } from "axios";
import { BookDetailsDto } from "../models/bookDetailsDto";
import {API_BASE_URL} from "../../config"
import { BookDto } from "../models/bookDto";

const apiConnector = {
    getBooks: async(): Promise<BookDetailsDto[]> => {
        try{
            const response: AxiosResponse<BookDetailsDto[]> =
                await axios.get(`${API_BASE_URL}/Books`);
                console.log('API Response:', response.data);
                return response.data;

        }catch(error){
            console.log('Error fetching Books: ', error);
            throw error;
        }
    },

    createBook: async (book: BookDto): Promise<void> => {
        try{
            await axios.post<number>(`${API_BASE_URL}/Books`, book);
        }catch(error){
            console.log(error);
            throw error;
        }
    },

    editBook: async (bookId: number, book: BookDto): Promise<void> => {
        try{
            await axios.put<number>(`${API_BASE_URL}/Books/${bookId}`, book);
        }catch(error){
            console.log(error);
            throw error;
        }
    },

    deleteBook: async (bookId: number): Promise<void> => {
        try{
            await axios.delete<number>(`${API_BASE_URL}/Books/${bookId}`);
        }catch(error){
            console.log(error);
            throw error;
        }
    },
}

export default apiConnector;