import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from '../Components/Header';
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Sidebar from "../Components/Sidebar";
import Authenticate from "../Pages/Authenticate";

const Routing = () => {    
    return (
        <>
            <BrowserRouter>
                <Header />
                <Sidebar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/Authenticate" element={<Authenticate />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Routing;