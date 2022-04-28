import React from "react";
import App from "./App.js";
import Other from "./Other.js";
import { Routes, Route, Link } from "react-router-dom";
import "./Route.css";
import Images from './Images.js'

export default function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/App/*" element={<App />}></Route>
        <Route path="/Other" element={<Other />}></Route>
        <Route path='/Images' element={<Images />}></Route>
      </Routes>

        <ul>
          <li><Link to=''>Home</Link></li>
          <li><Link to="/App">Application Form</Link></li>
          <li><Link to="/Other">Other Component</Link></li>
          <li><Link to="/Images">Images</Link></li>
          <li><Link to="/abc">Log In</Link></li>
          <li><Link to="/abc">LogOut</Link></li>
        </ul>
    </>
  );
}
