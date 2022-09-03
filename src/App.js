import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
