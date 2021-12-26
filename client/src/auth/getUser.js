import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
const key = "authtoken";
const getUser = () => {
  try {
    const user = jwtDecode(Cookies.get(key));
    return user;
  } catch (error) {
    return null;
  }
};

export default getUser;
