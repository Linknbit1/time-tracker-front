import jsonApi from "./jsonInstance";

interface LoginData {
  email: string;
  password: string;
}

const API_CALL = {
  // auth
  login: async (data: LoginData) => await jsonApi.post(`auth/login`, data),
};

export default API_CALL;
