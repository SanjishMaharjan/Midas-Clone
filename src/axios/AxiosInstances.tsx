import axios, {
  AxiosError,
  InternalAxiosRequestConfig,
  AxiosRequestHeaders,
} from 'axios'
import { getAccessToken } from '../helper/accessToken'
// import store from '../redux/Store';
// import { logout } from '../services/auth/AuthSlice';
// import { getAccessToken } from '../utils/patientAdminstrationutils/oauthToken'

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  featureCode?: string
  subFeatureCode?: string
}

// interface FeatureCode {
//   code?: string
// }

// interface Code {
//   featureCode?: FeatureCode
//   subFeatureCode?: FeatureCode
// }

// interface ResponseData<T = any> {
//   data: T
// }

const axiosInstance = axios.create({
  baseURL: '192.168.130.124:8000/api/v1',
})

// Request interceptor
axiosInstance.interceptors.request.use(
  (config: CustomAxiosRequestConfig) => {
    const accessToken = getAccessToken()
    console.log(accessToken)

    // const code: Code | undefined = Allcode()

    // Ensure the headers are of type AxiosRequestHeaders
    config.headers = config?.headers ?? ({} as AxiosRequestHeaders)

    config.headers['Content-Type'] = 'application/json'

    config.headers['Authorization'] = `Bearer ${accessToken}`
    config.headers['X-Feature-Code'] = 'WUgWHu4NTfJHmrX1PW9L3rj5SnbWqpIz'
    console.log('Reached')
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  },
)

// Response interceptor
// axiosInstance.interceptors.response.use(
//   (response: AxiosResponse<ResponseData>) => response,
//   (error: AxiosError) => {
//     if (error.response?.status === 401) {
//       store.dispatch(logout())
//       store.dispatch({ type: 'GLOBAL_RESET' })
//       localStorage.clear()
//     }
//     return Promise.reject(error)
//   },
// )

export default axiosInstance
