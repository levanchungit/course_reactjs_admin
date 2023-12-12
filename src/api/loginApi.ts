import axios from "axios";

export interface Request {
  email: string;
  passwordHash: string;
  device_id: string;
}

export interface LoginRequest {
  email: string;
  passwordHash: string;
  device_id: string;
}

const loginApi = {
  async login(data: LoginRequest) {
    console.log("BASE URL: ", process.env.REACT_APP_API_BASE_URL, data);
    return axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/api/auth/login`, data)
      .then((response) => response)
      .catch((error) => {
        throw error;
      });
  },
};

export default loginApi;
