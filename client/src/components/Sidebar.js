import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import ContactlessIcon from "@material-ui/icons/Contactless";
import ExitToAppTwoToneIcon from "@material-ui/icons/ExitToAppTwoTone";
import CalendarTodayTwoToneIcon from "@material-ui/icons/CalendarTodayTwoTone";
import AccountBoxOutlinedIcon from "@material-ui/icons/AccountBoxOutlined";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Button } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";

import AccountItem from "./AccountItem";
import SidebarItem from "./SidebarItem";
import useDrawer from "../hooks/Drawer/useDrawer";
import useAuth from "../auth/useAuth";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  paper: {
    width: 250,
  },
});
const Sidebar = () => {
  const navigate = useNavigate();
  const { drawer, toggleDrawer } = useDrawer();
  const { user, logOut } = useAuth();

  const styles = useStyles();
  return (
    <Drawer
      anchor="right"
      variant="temporary"
      open={drawer}
      classes={{ paper: styles.paper }}
    >
      <AccountItem username={user?.email} name={user?.name} />
      <SidebarItem
        title={"Dashboard"}
        IconComponent={<DashboardIcon />}
        onClick={() => {
          toggleDrawer();
          navigate("/dashboard");
        }}
      />
      <SidebarItem
        title={"Create New"}
        IconComponent={<AddCircleIcon />}
        onClick={() => {
          toggleDrawer();
          navigate("/create");
        }}
      />
      <SidebarItem
        title={"Join Room"}
        IconComponent={<ContactlessIcon />}
        onClick={() => {
          toggleDrawer();
          navigate("/join");
        }}
      />
      <SidebarItem
        title={"Calendar"}
        IconComponent={<CalendarTodayTwoToneIcon />}
        onClick={() => {
          toggleDrawer();
          navigate("/calendar");
        }}
      />

      <SidebarItem
        title={"Log Out"}
        IconComponent={<ExitToAppTwoToneIcon />}
        onClick={() => {
          toggleDrawer();
          logOut();
        }}
      />
      <Button
        onClick={() => toggleDrawer()}
        style={{ position: "absolute", bottom: 10 }}
      >
        <ArrowForwardIcon />
      </Button>
    </Drawer>
  );
};

export default Sidebar;
