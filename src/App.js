import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Podcast from "./components/Podcast";
import Login from "./components/Login";
import Home from "./components/Home";
import Upload from "./components/Upload";
import Register from "./components/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import All from "./components/All";

const App = () => {
  return (
    <div style={{ backgroundColor: "#343a40" }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/register" element={<Register />} />
          <Route path="/all" element={<All />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
