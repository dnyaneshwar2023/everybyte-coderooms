import React from "react";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";

function AccountItem({ username = "dpw411200@yahoo.com", name = "John Doe" }) {
  return (
    <div className="d-flex flex-column" style={styles.container}>
      <AccountCircleOutlinedIcon style={{ fontSize: 50 }} />
      <div style={styles.user}>{name}</div>
      <div style={styles.email}>{username}</div>
    </div>
  );
}

const styles = {
  container: {
    color: "black",
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    border: "2px solid green",
    padding: 10,
    borderRadius: 5,
  },
  user: {
    marginTop: 5,
    fontSize: "1.5vw",
    textAlign: "justify",
  },
  email: {
    fontWeight: 10,
    fontSize: "0.9vw",
    fontWeight: "bold",
    margin: 2,
  },
};

export default AccountItem;
