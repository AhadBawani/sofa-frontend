import React from 'react';
import '../Styles/Confirmation.css';
import { FaCheckCircle } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { GetUserCartHandler } from '../RequestHandlers/RequestHandler/RequestHandler';

const Confirmation = () => {
    const order = useSelector((state) => state?.Order?.order);
    const user = useSelector((state) => state?.User?.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleBackToShopping = () => {
        GetUserCartHandler(dispatch, user?._id);
        navigate('/');
    }
    return (
        <div className="confirmation-container">
            <div className="confirmation-box">
                <div className='flex justify-center'>
                    <span><FaCheckCircle size={140} className='text-green-700' /></span>
                </div>
                <div className='md:text-2xl font-semibold mt-2'>
                    <h2>Your order has been placed!</h2>
                    <p>Thank you for shopping with us.</p>
                    <span>Order ID : <span className='text-gray-600'>{order?.orderId}</span></span>
                </div>
                <div className='mt-4'>
                    <Button variant='contained' color='success' endIcon={<FaShoppingCart size={20}/>} onClick={handleBackToShopping}>
                        Back to shopping
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Confirmation;
