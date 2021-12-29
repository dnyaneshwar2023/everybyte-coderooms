import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import roomApi from "../apis/rooms";
import useAuth from "../auth/useAuth";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "relative",
    margin: "0 auto",
    top: "25%",
    width: "500px",
    height: "200px",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  input: {
    marginTop: 15,
    display: "flex",
    margin: "auto",
  },
  textfield: {
    width: "100%",
  },
}));

const InvitePopup = ({ open, handleChange, room }) => {
  const styles = useStyles();
  const { user } = useAuth();
  const [recipient, setRecipient] = useState("");

  const handleSubmit = async () => {
    const result = await roomApi.addMember(
      room.roomid,
      room.title,
      recipient,
      user.name
    );
    if (result.data.status === "ok") {
      toast.success(`Invitation Successful!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error(`Invitation Failed!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <div>
      <Modal open={open}>
        <div className={styles.paper}>
          <h4>Invite to collaborate using E-mail</h4>
          <div className={styles.input}>
            <TextField
              id="outlined-basic"
              label="E-mail"
              variant="filled"
              className={styles.textfield}
              onChange={(e) => setRecipient(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              style={{
                marginLeft: 10,
              }}
              endIcon={<SendIcon />}
              onClick={handleSubmit}
            >
              SEND
            </Button>
          </div>

          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleChange(!open)}
            style={{
              marginTop: 20,
            }}
          >
            Close
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default InvitePopup;
