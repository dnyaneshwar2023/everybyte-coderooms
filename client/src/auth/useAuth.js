import { useContext } from "react";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import AuthContext from "./context";

const key = "authtoken";

export default function useAuth() {
  const { user, setUser } = useContext(AuthContext);
  const logIn = (authToken) => {
    const newUser = jwtDecode(authToken);
    setUser(newUser);
    Cookies.set(key, authToken, { expires: 7 });
  };

  const logOut = () => {
    setUser(null);
    Cookies.remove(key);
  };

  const result = { user, logIn, logOut };
  return result;
}
