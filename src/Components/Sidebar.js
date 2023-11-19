import React, { useEffect, useRef } from "react";
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from "react-redux";
import { CartAction } from "../Redux/Actions/ComponentActions";
import CartCard from "./CartCard";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Sidebar = () => {
    const cart = useSelector((state) => state?.Component?.cart);
    const userCart = useSelector((state) => state?.User?.userCart) || [];
    const dispatch = useDispatch();
    const wrapperRef = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                // Click outside the component
                dispatch(CartAction(false));
            }
        };

        // Attach the event listener when the component mounts
        document.addEventListener('mousedown', handleOutsideClick);

        // Clean up the event listener when the component unmounts
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [dispatch]);

    const handleCheckoutPage = () => {
        dispatch(CartAction(false));
        navigate('/Checkout');
    }
    return (
        <>
            {cart &&
                <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div>}
            <div ref={wrapperRef} className={cart ? 'fixed top-0 right-0 w-[320px] h-screen bg-white z-10 duration-300' :
                'fixed top-0 right-[-320px] w-[300px] h-screen bg-white z-10 duration-300'}>
                <AiOutlineClose size={30} className='absolute right-4 top-4 cursor-pointer' onClick={() => dispatch(CartAction(!cart))} />
                <h2 className='text-2xl p-4'>
                    Cart
                </h2>
                <div>
                    <CartCard data={userCart} />
                </div>
                <div className="absolute bottom-0 left-1/3 w-[320px] bg-white p-4">
                    <Button variant="contained" color="success"
                        onClick={handleCheckoutPage}
                        disabled={userCart.length === 0}>Checkout</Button>
                </div>
            </div >
        </>
    )
}

export default Sidebar;