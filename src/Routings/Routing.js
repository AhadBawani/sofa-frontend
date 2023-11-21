import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from '../Components/Header';
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Sidebar from "../Components/Sidebar";
import Authenticate from "../Pages/Authenticate";
import Checkout from "../Pages/Checkout";
import { useDispatch, useSelector } from "react-redux";
import { GetUserCartHandler } from "../RequestHandlers/RequestHandler/RequestHandler";
import OrderConfirmation from "../Pages/OrderConfirmation";
import AdminHome from "../Pages/AdminHome";

const Routing = () => {
    const user = useSelector((state) => state?.User?.user);
    const dispatch = useDispatch();

    useEffect(() => {
        GetUserCartHandler(dispatch, user?._id);
    }, [user]);
    return (
        <>
            <BrowserRouter>
                {
                    user?.type === "Admin"
                        ?
                        <>
                            <Routes>
                                <Route path="/" element={<AdminHome user={user}/>} />
                            </Routes>
                        </>
                        :
                        <>
                            <Header />
                            <Sidebar />
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/About" element={<About />} />
                                <Route path="/Contact" element={<Contact />} />
                                <Route path="/Authenticate" element={<Authenticate />} />
                                <Route path="/Checkout" element={<Checkout />} />
                                <Route path="/OrderConfirmation" element={<OrderConfirmation />} />
                            </Routes>
                        </>
                }
            </BrowserRouter>
        </>
    )
}

export default Routing;