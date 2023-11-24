import React, { useEffect, useState } from 'react'
import { GetAllOrderHandler } from '../RequestHandlers/RequestHandler/RequestHandler';
import TrailTable from '../Components/Admin/TrailTable';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { FiLogOut } from "react-icons/fi";
import { UserAction } from '../Redux/Actions/UsersAction';
import { useNavigate } from 'react-router-dom';

const AdminHome = ({ user }) => {
    const [currentState, setCurrentState] = useState('pendingOrder');
    const Orders = useSelector((state) => state?.Order?.order);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [order, setOrder] = useState([]);

    useEffect(() => {
        GetAllOrderHandler(user?._id, dispatch);
    }, [])

    const handleClick = () => {
        setCurrentState(currentState === 'pendingOrder' ? 'DeliveredOrder' : 'pendingOrder');
    };

    useEffect(() => {
        if (currentState === 'pendingOrder') {
            const orders = Orders?.filter((item) => item?.orderDelivered === false);
            setOrder(orders);
        }
        else {
            const orders = Orders?.filter((item) => item?.orderDelivered === true);
            setOrder(orders);
        }
    }, [currentState, Orders])

    const handleLogout = () => {
        localStorage.clear();
        dispatch(UserAction(null));
        navigate('/');
    }
    return (
        <>
            <div className="flex justify-end mr-4 my-6">
                <div className='border border-gray-300 rounded-full p-4'>
                    <span
                        onClick={handleClick}
                        className={`cursor-pointer py-2 px-4 font-semibold
                ${currentState === 'pendingOrder' ? 'bg-black text-white' : 'bg-white text-black'}`}
                        style={{ transition: 'all 0.3s', borderRadius: '9999px' }}
                    >
                        Pending Order
                    </span>
                    <span
                        onClick={handleClick}
                        className={`cursor-pointer py-2 px-4 font-semibold
                ${currentState === 'DeliveredOrder' ? 'bg-black text-white' : 'bg-white text-black'}`}
                        style={{ transition: 'all 0.3s', borderRadius: '9999px' }}
                    >
                        Delivered Order
                    </span>
                </div>
                <div className='mt-2 ml-2'>
                    <Button variant='contained'
                        color='primary' endIcon={<FiLogOut />} onClick={handleLogout}>
                        Logout
                    </Button>
                </div>
            </div>
            <div>
                <TrailTable order={order} currentState={currentState} />
            </div>
        </>
    )
}

export default AdminHome