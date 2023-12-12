import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestHeaders,
  InternalAxiosRequestConfig,
} from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 5000,
});
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig<any>) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      // eslint-disable-next-line no-param-reassign
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      } as AxiosRequestHeaders;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
