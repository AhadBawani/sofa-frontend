import React from "react";
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from "react-redux";
import { CartAction } from "../Redux/Actions/ComponentActions";
import CartCard from "./CartCard";

const Sidebar = () => {
    const cart = useSelector((state) => state?.Component?.cart);
    const userCart = useSelector((state) => state?.User?.userCart) || [];
    const dispatch = useDispatch();
    return (
        <>
            {cart &&
                <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div>}
            <div className={cart ? 'fixed top-0 right-0 w-[320px] h-screen bg-white z-10 duration-300' :
                'fixed top-0 right-[-320px] w-[300px] h-screen bg-white z-10 duration-300'}>
                <AiOutlineClose size={30} className='absolute right-4 top-4 cursor-pointer' onClick={() => dispatch(CartAction(!cart))} />
                <h2 className='text-2xl p-4'>
                    Cart
                </h2>
                <div>
                    <CartCard data={userCart}/>
                </div>
            </div >
        </>
    )
}

export default Sidebar;