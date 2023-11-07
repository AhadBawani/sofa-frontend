import React from "react";
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from "react-redux";
import { CartAction } from "../Redux/Actions/ComponentActions";

const Sidebar = () => {
    const cart = useSelector((state) => state?.Component?.cart);
    const dispatch = useDispatch();
    return (
        <>
            <div className={cart ? 'fixed top-0 right-0 w-[300px] h-screen bg-white z-10 duration-300' :
                'fixed top-0 right-[-300px] w-[300px] h-screen bg-white z-10 duration-300'}>
                <AiOutlineClose size={30} className='absolute right-4 top-4 cursor-pointer' onClick={() => dispatch(CartAction(!cart))} />
                <h2 className='text-2xl p-4'>
                    Cart
                </h2>
            </div>            
        </>
    )
}

export default Sidebar;