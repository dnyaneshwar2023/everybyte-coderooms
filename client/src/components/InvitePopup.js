import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

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

const InvitePopup = ({ open, handleChange }) => {
  const styles = useStyles();

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
            />
            <Button
              variant="contained"
              color="primary"
              style={{
                marginLeft: 10,
              }}
              endIcon={<SendIcon />}
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
