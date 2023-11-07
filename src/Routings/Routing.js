import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from '../Components/Header';
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Sidebar from "../Components/Sidebar";

const Routing = () => {
    const cart = useSelector((state) => state?.Component?.cart);
    return (
        <>
            <BrowserRouter>
                <Header />
                {cart &&
                <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div>}
                <Sidebar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Routing;