import React from "react";
import { NavLink } from "react-router-dom";
import EventIcon from "@material-ui/icons/Event";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import { Button } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import useDrawer from "../hooks/Drawer/useDrawer";

import useAuth from "../auth/useAuth";

function Navbar() {
  const { drawer, toggleDrawer } = useDrawer();
  const { user } = useAuth();

  const title = "<EveryByte / >";
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <nav
            className="navbar navbar-expand-lg navbar-dark py-0"
            style={{ backgroundColor: "#000000" }}
          >
            <NavLink className="navbar-brand" to="/">
              {" "}
              {title}
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>

                {/* <li className="nav-item" style={{ marginLeft: 10 }}>
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li> */}
                <li className="nav-item mt-2" style={{ marginLeft: 10 }}>
                  <Button
                    className="nav-link"
                    style={{
                      width: "auto",
                      height: 10,
                      alignContent: "center",
                      justifyContent: "center",
                    }}
                    onClick={() => {
                      window.location.href =
                        "https://github.com/Dnyaneshwar-dev/everybyte-coderooms";
                      return null;
                    }}
                  >
                    <GitHubIcon
                      className="nav-link"
                      style={{
                        fontSize: 40,
                      }}
                    />
                  </Button>
                </li>
                <li className="nav-item" style={{ marginLeft: 10 }}>
                  <NavLink className="nav-link" to="/calendar">
                    <EventIcon />
                  </NavLink>
                </li>

                {user ? (
                  <li className="nav-item mt-2" style={{ marginLeft: 10 }}>
                    <Button
                      onClick={() => toggleDrawer()}
                      style={{
                        width: "auto",
                        height: 10,
                        alignContent: "center",
                        justifyContent: "center",
                      }}
                    >
                      <AccountCircleOutlinedIcon
                        className="nav-link"
                        style={{
                          fontSize: 40,
                          color: "white",
                        }}
                      />
                      <ChevronLeftIcon
                        className="nav-link"
                        style={{
                          fontSize: 40,
                          color: "white",
                        }}
                      />
                    </Button>
                  </li>
                ) : (
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/login">
                      Login
                    </NavLink>
                  </li>
                )}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
