import React from "react";
import "styles/main.css";
import Home from "views/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "swiper/css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
