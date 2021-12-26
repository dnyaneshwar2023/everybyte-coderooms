import React from "react";
import GoogleButton from "react-google-button";
import { GoogleLogin } from "react-google-login";
import loginApi from "../apis/login";
import Cookies from "js-cookie";
import useAuth from "../auth/useAuth";

const Login = () => {
  const { user, logIn } = useAuth();
  const onSignIn = async (user) => {
    const id_token = user.getAuthResponse().id_token;
    Cookies.set("authtoken", id_token, { expires: 7 });
    const result = await loginApi(id_token);
    if (result.data.status === "success") {
      logIn(id_token);
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        marginTop: "15%",
      }}
    >
      <GoogleLogin
        clientId="703956863946-em6dt95q7vcjrock2qbkvafa6ge057kq.apps.googleusercontent.com"
        render={(props) => <GoogleButton type="dark" onClick={props.onClick} />}
        onSuccess={onSignIn}
        onFailure={() => console.log("Failed")}
        cookiePolicy={"single_host_origin"}
        buttonText="Login"
      />
    </div>
  );
};

export default Login;
