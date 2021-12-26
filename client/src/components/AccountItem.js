import React from "react";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";

function AccountItem({ username = "dpw411200@yahoo.com" }) {
  return (
    <div className="d-flex flex-column" style={styles.container}>
      <AccountCircleOutlinedIcon style={{ fontSize: 50 }} />
      <div style={styles.user}>{username}</div>
    </div>
  );
}

const styles = {
  container: {
    color: "blue",
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    border: "2px solid green",
    padding: 10,
    borderRadius: 5,
  },
  user: {
    marginTop: 5,
    fontWeight: "bold",
  },
};

export default AccountItem;
