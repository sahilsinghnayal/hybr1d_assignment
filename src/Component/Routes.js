import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import SinglePage from "./SinglePage";
// import your route components too
function Navs() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<SinglePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Navs;
