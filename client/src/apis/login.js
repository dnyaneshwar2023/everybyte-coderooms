import axios from "axios";

const Login = (token) => {
  return axios.post("/login", token);
};

export default Login;
