import React, { useEffect, useState } from 'react';
import { GetUserOrderHandler } from '../RequestHandlers/RequestHandler/RequestHandler';
import UserOrderCards from '../Components/UserOrderCards';
import { Button } from '@mui/material';
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const UserOrders = ({ user }) => {
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        GetUserOrderHandler(user?._id, setOrders);
    }, [user])
    const handleBackToShopping = () => {
        navigate('/');
    }
    return (
        <div>
            {
                orders.length > 0
                    ?
                    <>
                        <div className='m-4 p-4'>
                            {
                                orders.map((item, index) => {
                                    return <>
                                        <UserOrderCards order={item} />
                                    </>
                                })
                            }
                        </div>
                    </>
                    :
                    <div className='flex flex-col w-full items-center justify-center mt-10 font-semibold text-gray-600 text-4xl'>
                        <div>
                            Purchase Now
                        </div>
                        <div className='mt-4'>
                            <Button variant='contained' color='success' endIcon={<FaShoppingCart size={20} />} onClick={handleBackToShopping}>
                                Back to shopping
                            </Button>
                        </div>
                    </div>
            }
        </div>
    )
}

export default UserOrders;