import axios from 'axios';
import { getAccessToken } from '../helper/accessToken';
import { isLoginRequest } from '../helper/isLoggedin';

const AxiosLoginInstance = axios.create({
  baseURL: 'http://192.168.130.124:8000/api/v1/',
  headers: {
    'Content-Type': 'application/json',
  },
});

AxiosLoginInstance.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    console.log(`Request URL: ${config.url}`);
    console.log(`Access Token: ${token}`);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    if (!isLoginRequest(config.url)) {
      config.headers['X-Feature-Code'] = 'WUgWHu4NTfJHmrX1PW9L3rj5SnbWqpIz';
      console.log('X-Feature-Code header added');
    } else {
      console.log('X-Feature-Code header not added');
    }

    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

export default AxiosLoginInstance;
