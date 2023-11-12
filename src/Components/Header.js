import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { CartAction } from '../Redux/Actions/ComponentActions';
import { Avatar, Badge } from '@mui/material';
import { useSelector } from "react-redux";
import { getSplitedName } from '../Utils/utils';
import { GetUserByIdHandler, GetUserCartHandler } from "../RequestHandlers/RequestHandler/RequestHandler";

const Header = () => {
    const userCart = useSelector((state) => state?.User?.userCart) || [];
    const user = useSelector((state) => state?.User?.user);
    const userId = localStorage.getItem('userId');
    const [count, setCount] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (userId) {
            GetUserByIdHandler(dispatch, navigate, userId);
            GetUserCartHandler(dispatch, userId);
        }
    }, [])
    useEffect(() => {
        if (userCart.length > 0) {
            let quantity = 0;
            userCart.map((item) => {
                quantity += item?.quantity;
            })

            setCount(quantity);
        }
    }, [userCart])
    const handleProfileClick = () => {
        if (user) {
            console.log(user);
        }
        else {
            navigate('/Authenticate');
        }
    }

    const handleCartOpen = () => {
        dispatch(CartAction(true));
    }
    return (
        <div style={location.pathname === '/Authenticate' ? { display: 'none' } : { display: 'block' }}>
            <div className={"w-full bg-gray-900 h-20 text-white flex items-center justify-between px-4"}>
                <div className="text-3xl font-bold ml-8">FurniShop</div>
                <div className="flex justify-end space-x-10 mr-12">
                    <Link to={'/'}>Home</Link>
                    <Link to={'/About'}>About</Link>
                    <Link to={'/Contact'}>Contact</Link>
                    <Badge badgeContent={count} color="primary">
                        <FaShoppingCart size={24} style={{ cursor: 'pointer' }} onClick={handleCartOpen} />
                    </Badge>
                    <Avatar className='mt-[-4px] cursor-pointer'
                        sx={{ width: 34, height: 34 }} onClick={() => handleProfileClick()}>
                        {user ? getSplitedName(user?.username) : null}
                    </Avatar>
                </div>
            </div>
        </div>
    )
}

export default Header;