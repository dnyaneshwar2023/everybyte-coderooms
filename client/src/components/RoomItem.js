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

const RoomItem = ({ room }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div style={{ marginTop: 7, fontFamily: "monospace" }}>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <CodeIcon />
        </ListItemIcon>
        <div style={{ width: "40%" }}>
          <ListItemText primary={room.title} />
        </div>
        <div style={{ width: "30%", marginLeft: 20 }}>
          <ListItemText secondary={room.roomid} />
        </div>
        <div style={{ width: "30%" }}>
          <ListItemText secondary={room.date} />
        </div>

        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <RoomSubItem room={room} />
      </Collapse>
    </div>
  );
};

export default RoomItem;
