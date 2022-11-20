import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chapter from "./screens/Chapter";
import Chapters from "./screens/Chapters";
import Home from "./screens/Home";
import Verse from "./screens/Verse";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chapters" element={<Chapters />} />
        <Route path="/chapter/:id" element={<Chapter />} />
        <Route path="/verse/:id" element={<Verse />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
