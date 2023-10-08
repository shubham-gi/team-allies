import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Studentdesk from "./Components/Studentdesk";
import Signin from "./Components/Signin";
const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <>
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn}></Navbar>
      <Routes>
        <Route
          path="/"
          element={<Home loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
        />
        <Route
          path="/studentdesk"
          element={
            <Studentdesk loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          }
        />
        <Route
          path="/signin"
          element={<Signin loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
        ></Route>
      </Routes>
    </>
  );
};

export default App;
