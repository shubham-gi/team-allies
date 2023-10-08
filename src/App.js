import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Studentdesk from "./Components/Studentdesk";
import Signin from "./Components/Signin";
import Developers from "./Components/Developers";
const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user,setUser]=useState({name:"Please Login to get more details"})

  return (
    <>
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} setUser={setUser}></Navbar>
      <Routes>
        <Route
          path="/"
          element={<Home loggedIn={loggedIn} setLoggedIn={setLoggedIn} user={user}/>}
        />
        <Route
          path="/studentdesk"
          element={
            <Studentdesk loggedIn={loggedIn} setLoggedIn={setLoggedIn} user={user}/>
          }
        />
        <Route
          path="/developers"
          element={
            <Developers />
          }
        />
        <Route
          path="/signin"
          element={<Signin loggedIn={loggedIn} setLoggedIn={setLoggedIn} user={user} setUser={setUser}/>}
        ></Route>
      </Routes>
    </>
  );
};

export default App;
