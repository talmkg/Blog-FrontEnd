import "./App.css";
import React from "react";
import NavBar from "./components/navbar/BlogNavbar";
import Footer from "./components/footer/Footer";
import Home from "./views/home/Home";
import Blog from "./views/blog/Blog";
import NewBlogPost from "./views/new/New";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbarmobile from "./components/navbar/NavbarMobile";
import Search from "./views/search/Search";
import Profile from "./views/profile/Profile";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Router>
      <div id="root">
        <div id="main" className="container-xl p-0">
          <NavBar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/blogs/:id" element={<Blog />} />
            <Route path="/new" element={<NewBlogPost />} />
            <Route path="/search" element={<Search />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <Navbarmobile />
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
