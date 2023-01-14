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

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
