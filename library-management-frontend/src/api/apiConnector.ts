import axios, { AxiosResponse } from "axios";
import { BookDetailsDto } from "../models/bookDetailsDto";
import {API_BASE_URL} from "../../config"

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
}

export default apiConnector;