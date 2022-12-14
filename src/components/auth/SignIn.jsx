import React, { useState } from "react";
import { Typography, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { Navigate } from "react-router-dom";

const useStyles = makeStyles({
  formStyles: {
    margin: "0px auto",
    padding: "30px",
    borderRadius: "9px",
    boxShadow: "0px 0px 12px -3px #000000",
  },
  spacing: {
    marginTop: "20px ",
  },
});

const SignIn = () => {
  const classes = useStyles();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(creds));
    setCreds({ email: "", password: "" });
  };

  if (auth._id) return <Navigate to="/" />;

  return (
    <>
      <form
        noValidate
        autoComplete="off"
        className={classes.formStyles}
        onSubmit={handleSubmit}
      >
        <Typography variant="h5">signIn</Typography>
        <TextField
          className={classes.spacing}
          id="enter-email"
          label="Enter Email"
          variant="outlined"
          fullWidth
          value={creds.email}
          onChange={(e) => setCreds({ ...creds, email: e.target.value })}
        />
        <TextField
          className={classes.spacing}
          id="enter-password"
          type="password"
          label="Enter Password"
          variant="outlined"
          fullWidth
          value={creds.password}
          onChange={(e) => setCreds({ ...creds, password: e.target.value })}
        />
        <Button
          className={classes.spacing}
          variant="contained"
          color="primary"
          type="submit"
        >
          SignIn
        </Button>
      </form>
    </>
  );
};

export default SignIn;
