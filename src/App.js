import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loadUser } from "./store/actions/authActions";

import Todos from "./components/todos/Todos";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Navbar from "./components/navBar/Navbar";

const useStyles = makeStyles({
  contentStyle: {
    margin: "30px auto",
  },
});
function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Container maxWidth="md">
          <Navbar />
          <Container className={classes.contentStyle} maxWidth="sm">
            <Routes>
              <Route path="/" element={<Todos />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </Container>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
