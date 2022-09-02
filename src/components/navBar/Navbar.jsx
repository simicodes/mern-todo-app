import React from "react";
import { AppBar, Typography, Toolbar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  linkStyles: {
    color: "#fafafa",
    textDecoration: "none",
  },
});

const Navbar = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const handleSignOut = () => {
    // sign out the user
    navigate("/signin");
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" className={classes.root}>
            <Link className={classes.linkStyles} to="/">
              ToDoApp;
            </Link>
          </Typography>
          <Typography variant="subtitle2" className={classes.root}>
            Logged in as Simeon
          </Typography>
          <Button color="inherit" onClick={() => handleSignOut()}>
            SignOut
          </Button>
          <Button color="inherit">
            <Link className={classes.linkStyles} to="/signin">
              SignIn
            </Link>
          </Button>
          <Button color="inherit">
            <Link className={classes.linkStyles} to="/signup">
              SignUp
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
