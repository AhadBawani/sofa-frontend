import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import Request from '../RequestHandlers/Request/Request';
import { AddCartQuantity, AddToCartHandler } from '../RequestHandlers/RequestHandler/RequestHandler';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const [disabled, setDisabled] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userCart = useSelector((state) => state?.User?.userCart) || [];
    const user = useSelector((state) => state?.User?.user);
    const AddToCart = (productId) => {
        setDisabled(true);
        if (user) {
            const cart = userCart.filter((item) => item?.productId === productId);
            if (cart.length > 0) {
                AddCartQuantity(dispatch, cart[0]?._id);
            }
            else {
                const cartObj = {
                    productId: productId,
                    userId: user?._id,
                    quantity: 1
                }
                AddToCartHandler(dispatch, cartObj);
            }
        }
        else {
            navigate('/Authenticate');
        }
        setDisabled(false);
    }

    return (
        <div>
            <div className='border border-gray-300 rounded-xl p-4 h-[140px] w-[160px] md:h-[220px] md:w-[240px]'>
                <img src={Request.PRODUCT_IMAGE + product?.productImage} className='rounded-xl h-[120px] w-[140px] md:h-[190px] md:w-[220px]' alt={product?.productName} />
                <div className='flex justify-end items-end mt-[-2.5rem] mr-2'>
                    <div className='p-2 rounded-full bg-blue-100 w-8 h-8 flex justify-center items-center hover:bg-blue-200'>
                        <AiOutlinePlus
                            size={30}
                            className={`cursor-pointer ${disabled ? 'opacity-50 pointer-events-none' : ''}`}
                            onClick={disabled ? null : () => AddToCart(product?.id)}
                        />
                    </div>
                </div>
            </div>
            <div className='mt-2'>
                <div className='font-semibold lg:text-xl'>{product?.productName}</div>
                <div className='text-base text-gray-600 font-semibold'>{product?.productPrice}</div>
            </div>
        </div>
    )
}

export default Product;