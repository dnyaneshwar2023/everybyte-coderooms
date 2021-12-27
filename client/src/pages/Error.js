import React from "react";
import error from "./error.svg";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
function Error() {
  return (
    <>
      <div className="row mt-5 text-center">
        <div className="col w-50 h-50 justify-content-center">
          <img src={error} alt="Error" className="error" />
        </div>
      </div>
      <div className="row text-center">
        <div className="col mt-5 h-50 justify-content-center">
          <h2>Sorry, The Page Not Found</h2>
        </div>
      </div>
      <div className="row text-center">
        <div className="col mt-5 h-50 justify-content-center">
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <Button
              className="text-center mainbtn"
              variant="contained"
              color="primary"
            >
              Take Me to Home
            </Button>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Error;
