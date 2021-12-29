import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import roomApi from "../apis/rooms";
import RoomItem from "./RoomItem";
import useAuth from "../auth/useAuth";
import ListContext from "../hooks/roomlist/context";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    marginLeft: "auto",
    marginTop: 20,
    width: "100%",
    maxWidth: 1000,
    backgroundColor: theme.palette.background.paper,
    alignSelf: "center",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function Listings() {
  const classes = useStyles();
  const [list, setList] = useState([]);
  const value = { list, setList };
  const { user } = useAuth();

  const getList = async () => {
    const data = await roomApi.getAllRooms(user.email);
    return data.data;
  };
  useEffect(() => {
    getList().then((rooms) => {
      setList(rooms.data);
    });
  }, []);
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Recent Rooms
        </ListSubheader>
      }
      className={classes.root}
      style={{ maxHeight: "100%", overflow: "hidden" }}
    >
      {list.map((item) => {
        return (
          <div key={item.roomid}>
            <ListContext.Provider value={value}>
              <RoomItem room={item} />
            </ListContext.Provider>
          </div>
        );
      })}
    </List>
  );
}
