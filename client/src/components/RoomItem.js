import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";

import CodeIcon from "@material-ui/icons/Code";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import RoomSubItem from "./RoomSubItem";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 500,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const RoomItem = ({
  title = "Coding Round",
  roomid = "xcz_1hdsjhje",
  date = "13-10-2021",
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div style={{ marginTop: 7 }}>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <CodeIcon />
        </ListItemIcon>
        <div style={{ width: "40%" }}>
          <ListItemText primary={title} />
        </div>
        <div style={{ width: "30%", marginLeft: 20 }}>
          <ListItemText secondary={roomid} />
        </div>
        <div style={{ width: "30%" }}>
          <ListItemText secondary={date} />
        </div>

        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <RoomSubItem roomid={roomid} />
      </Collapse>
    </div>
  );
};

export default RoomItem;
