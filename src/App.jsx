import { useContext, useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Dropdown } from "flowbite-react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import AllGames from "./pages/AllGames";
import SingleGameDetails from "./pages/SingleGameDetails";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/games" element={<AllGames />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/games/:id" element={<SingleGameDetails />}></Route>
      </Routes>
    </>
  );
}

export default App;
