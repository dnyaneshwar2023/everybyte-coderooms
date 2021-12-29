import React, { useState } from "react";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import PersonAddRoundedIcon from "@material-ui/icons/PersonAddRounded";
import { Button, ListItemText } from "@material-ui/core";
import InvitePopup from "./InvitePopup";
import { useNavigate } from "react-router-dom";
import useList from "../hooks/roomlist/useList";
const styles = {
  item: {
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    marginTop: 5,
    marginBottom: 5,
    color: "blue",
  },
  delete: {
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    color: "red",
  },
};

const RoomSubItem = ({ room }) => {
  const navigate = useNavigate();
  const { removeItem } = useList();
  const [modal, setModal] = useState(false);
  const handleDelete = () => {
    removeItem(room.roomid);
  };
  return (
    <>
      <div className="d-flex align-items-center justify-content-center w-100">
        <div style={styles.item} className="d-flex flex-column text-center">
          <Button
            style={{ color: "blue" }}
            onClick={() => navigate(`/edit/${room.roomid}`)}
          >
            <EditRoundedIcon />
          </Button>
        </div>
        <div style={styles.item} className="d-flex flex-column text-center">
          <Button style={{ color: "blue" }} onClick={() => setModal(!modal)}>
            <PersonAddRoundedIcon />
          </Button>
        </div>
        <div style={styles.delete} className="d-flex flex-column text-center">
          <Button style={{ color: "red" }} onClick={handleDelete}>
            <DeleteRoundedIcon />
          </Button>
        </div>
      </div>
      <InvitePopup open={modal} room={room} handleChange={setModal} />
    </>
  );
};

export default RoomSubItem;
