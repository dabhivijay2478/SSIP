import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home";
import Login from "./Screens/Login";
import Addservice from "./Component/Addservice";
import Dash from "./Component/Dash";
import Updateservice from "./Component/Updateservice";
import Database from "./Component/Database";
import Sucesspage from "./Component/Sucesspage";
import Errorpage from "./Component/Errorpage";
// import PrivateRoute from "./ProtectedRoute";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />

        <Route exact path="/Dash" element={<Dash />}>
          <Route exact path="Home" element={<Home />} />
          <Route exact path="Addservice" element={<Addservice />} />
          <Route exact path="Database" element={<Database />} />
        </Route>
        <Route exact path="/Sucesspage" element={<Sucesspage />} />
        <Route exact path="*" element={<Errorpage />} />
     
        </Routes>
    </>
  );
}

export default App;
