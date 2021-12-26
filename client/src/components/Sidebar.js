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

import AccountItem from "./AccountItem";
import SidebarItem from "./SidebarItem";
import useDrawer from "../hooks/Drawer/useDrawer";
import useAuth from "../auth/useAuth";

const useStyles = makeStyles({
  paper: {
    width: "auto",
  },
});
const Sidebar = () => {
  const { drawer, toggleDrawer } = useDrawer();
  const { user } = useAuth();

  const styles = useStyles();
  return (
    <Drawer
      anchor="right"
      variant="temporary"
      open={drawer}
      classes={{ paper: styles.paper }}
    >
      <AccountItem username={user?.email} />
      <SidebarItem
        title={"Profile"}
        IconComponent={<AccountBoxOutlinedIcon />}
      />
      <SidebarItem title={"Create New"} IconComponent={<AddCircleIcon />} />
      <SidebarItem title={"Join Room"} IconComponent={<ContactlessIcon />} />
      <SidebarItem
        title={"Calendar"}
        IconComponent={<CalendarTodayTwoToneIcon />}
      />

      <SidebarItem title={"Log Out"} IconComponent={<ExitToAppTwoToneIcon />} />
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
