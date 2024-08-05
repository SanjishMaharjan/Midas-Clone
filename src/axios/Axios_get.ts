import axios from 'axios';

// Create an Axios instance
export const customAxios = axios.create({
  baseURL: 'http://192.168.130.124:8002/api',
});

// Define the fetch function
export const fetchPatientData = async () => {
  const response = await customAxios.get('get-detail-bill', {
    params: {
      hospital_no: "1",
      bill_no: "8000001",
    },
  });
  console.log(response.data)
  return response.data;
};


export const fetchData = async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
  console.log(response.data)
  return response.data;
};
export const fetchCatData = async () => {
  const response = await axios.get("https://catfact.ninja/fact");
//   console.log(response.data)
  return response.data;
};
export const fetchCatImageData = async () => {
  const response = await axios.get("https://api.thecatapi.com/v1/images/search");
  console.log(response.data)
  return response.data;
};
