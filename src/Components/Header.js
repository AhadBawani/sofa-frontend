import React from 'react'
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { CartAction } from '../Redux/Actions/ComponentActions';

const Header = () => {
    const dispatch = useDispatch();
    const handleCartOpen = () => {
        dispatch(CartAction(true));
    }
    return (
        <div className="w-full bg-gray-900 h-20 text-white flex items-center justify-between px-4">
            <div className="text-3xl font-bold ml-8">FurniShop</div>
            <div className="flex justify-end space-x-10 mr-12">
                <Link to={'/'}>Home</Link>
                <Link to={'/About'}>About</Link>
                <Link to={'/Contact'}>Contact</Link>
                <FaShoppingCart size={24} style={{ cursor: 'pointer' }} onClick={handleCartOpen}/>
            </div>
        </div>
    )
}

export default Header;