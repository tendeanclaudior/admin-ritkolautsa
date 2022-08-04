import React from "react";
import { Route, Routes } from "react-router-dom";
import "./assets/css/index.css";
import Home from "./components/Home";
import { AuthContextProvider } from "./context/AuthContext";
import ForgetPass from "./pages/ForgetPassword";
import SignIn from "./pages/SignIn";

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/forgetpas" element={<ForgetPass />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
};

export default App;
