import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "@material-ui/core";

import Todos from "./components/todos/Todos";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Navbar from "./components/navBar/Navbar";
function App() {
  return (
    <>
      <BrowserRouter>
        <Container maxWidth="md">
          <Navbar />
          <Routes>
            <Route path="/" element={<Todos />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
