import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { CartAction, UserProfileAction } from '../Redux/Actions/ComponentActions';
import { Avatar, Badge } from '@mui/material';
import { useSelector } from "react-redux";
import { getSplitedName } from '../Utils/utils';
import { GetUserByIdHandler, GetUserCartHandler } from "../RequestHandlers/RequestHandler/RequestHandler";
import UserProfile from './UserProfile';

const Header = () => {
    const userCart = useSelector((state) => state?.User?.userCart) || [];
    const user = useSelector((state) => state?.User?.user);
    const userProfile = useSelector((state) => state?.Component?.userprofile);
    const userId = localStorage.getItem('userId');
    const [count, setCount] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (userId) {
            GetUserByIdHandler(dispatch, navigate, userId);

        }
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])
    useEffect(() => {
        if (userCart.length === 0) setCount(0);
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
            dispatch(UserProfileAction(!userProfile));
        }
        else {
            navigate('/Authenticate');
        }
    }

    const handleCartOpen = () => {
        dispatch(CartAction(true));
    }
    return (
        <>
            <div style={location.pathname === '/Authenticate' || location.pathname === '/OrderConfirmation' ? { display: 'none' } : { display: 'block' }}>
                <div className={"w-full bg-gray-900 h-20 text-white flex items-center justify-between px-4"}>
                    <div className="text-3xl font-bold ml-8 cursor-pointer" onClick={() => navigate('/')}>FurniShop</div>
                    <div className="flex items-center">
                        {/* Conditional rendering based on screen size */}
                        {isMobile ? (
                            // For mobile view
                            <div className="flex justify-end space-x-4">
                                <Badge badgeContent={count} color="primary">
                                    <FaShoppingCart size={24} style={{ cursor: 'pointer' }} onClick={handleCartOpen} />
                                </Badge>
                                <Avatar
                                    className='mt-[-4px] cursor-pointer'
                                    sx={{ width: 34, height: 34 }}
                                    onClick={() => handleProfileClick()}
                                >
                                    {user ? getSplitedName(user?.firstName, user?.lastName) : null}
                                </Avatar>
                            </div>
                        ) : (
                            // For larger screens (non-mobile)
                            <div className="flex justify-end space-x-6 mr-8">
                                <Link to={'/'}>Home</Link>
                                <Link to={'/About'}>About</Link>
                                <Link to={'/Contact'}>Contact</Link>                                
                                <Badge badgeContent={count} color="primary">
                                    <FaShoppingCart size={24} style={{ cursor: 'pointer' }} onClick={handleCartOpen} />
                                </Badge>
                                <Avatar
                                    className='mt-[-6px] cursor-pointer'
                                    sx={{ width: 38, height: 38 }}
                                    onClick={() => handleProfileClick()}
                                >
                                    {user ? getSplitedName(user?.firstName, user?.lastName) : null}
                                </Avatar>
                            </div>
                        )}
                    </div>
                </div>
                {userProfile && (
                    <div className='fixed z-10 top-32 
                    right-[-10px] md:right-0 transform -translate-y-1/2 p-4'>
                        <UserProfile user={user} dispatch={dispatch} />
                    </div>
                )}
            </div>
        </>
    );
}

export default Header;