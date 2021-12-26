import Button from "@material-ui/core/Button";
import React from "react";
import { makeStyles } from "@material-ui/styles";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles({
  button: {
    color: "blue",
    border: "1px solid blue",
  },
});

const SidebarItem = ({ title, IconComponent, onClick }) => {
  const classes = useStyles();
  return (
    <div className="d-flex btn" style={styles.container}>
      <Button
        color="primary"
        variant="outlined"
        style={{ width: "100%" }}
        onClick={onClick}
        className={classes.button}
      >
        {IconComponent}
        <div style={styles.title}>{title}</div>
      </Button>
    </div>
  );
};

const styles = {
  title: {
    fontWeight: "bold",
    marginLeft: 10,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
};

export default SidebarItem;
