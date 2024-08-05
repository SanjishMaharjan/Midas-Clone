import axiosLoginInstance from "./AxionsLoginInstance";
import { BankDetails } from "../types/Banks/BankTypes";

export const fetchBankDetails = async() =>{
    try{

        console.log("fetching..")
        const response = await axiosLoginInstance.get('pa/banks?page=1&per_page=15')
        return response.data
    }catch (error: any) {
        // Check if error.response is available and contains data
        if (error.response && error.response.data) {
          // Extract the error message
          const errorMessage = error.response.data.message || 'An unknown error occurred';
          throw new Error(errorMessage);
        } else {
          // Handle other types of errors
          throw new Error('An unknown error occurred');
        }
      }
    
};


export const changeBankDetails = async (id: string, updatedDetails: Partial<BankDetails>) => {
    try {
      const response = await axiosLoginInstance.put(`/pa/banks/${id}`, updatedDetails);
      console.log('Updated bank details:', response.data)
      return response.data;
    } catch (error: any) {
        // Check if error.response is available and contains data
        if (error.response && error.response.data) {
          // Extract the error message
          const errorMessage = error.response.data.message || 'An unknown error occurred';
          throw new Error(errorMessage);
        } else {
          // Handle other types of errors
          throw new Error('An unknown error occurred');
        }
      }
  };

  export const archiveBankDetails = async (id: string) => {
    try {
      const response = await axiosLoginInstance.delete(`/pa/banks/${id}`);
      console.log('Archived bank details:', response.data)
      return response.data;
    } catch (error: any) {
        // Check if error.response is available and contains data
        if (error.response && error.response.data) {
          // Extract the error message
          const errorMessage = error.response.data.message || 'An unknown error occurred';
          throw new Error(errorMessage);
        } else {
          // Handle other types of errors
          throw new Error('An unknown error occurred');
        }
      }
    };

    export const addBankDetails = async (
      newBank: Omit<BankDetails, 'id' | 'created_by' | 'created_at'>,
    ) => {
      try {
        const response = await axiosLoginInstance.post('/pa/banks', newBank);
        console.log('Added bank details:', response.data)
        return response.data;
      } catch (error: any) {
          // Check if error.response is available and contains data
          if (error.response && error.response.data) {
            // Extract the error message
            const errorMessage = error.response.data.message || 'An unknown error occurred';
            throw new Error(errorMessage);
          } else {
            // Handle other types of errors
            throw new Error('An unknown error occurred');
          }
        }
      }