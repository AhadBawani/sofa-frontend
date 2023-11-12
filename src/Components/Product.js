import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCartAction } from '../Redux/Actions/UsersAction';
import Request from '../RequestHandlers/Request/Request';
import { AddToCartHandler } from '../RequestHandlers/RequestHandler/RequestHandler';

const Product = ({ product }) => {
    const dispatch = useDispatch();
    const userCart = useSelector((state) => state?.User?.userCart) || [];
    const user = useSelector((state) => state?.User?.user);
    const AddToCart = (product) => {
        const cartObj = {
            productId: product?.id,
            userId: user?._id,
            quantity: 1
        }
        AddToCartHandler(dispatch, cartObj);
    }
    
    return (
        <div>
            <div className='border border-gray-300 rounded-xl p-4 h-[140px] w-[160px] md:h-[220px] md:w-[240px]'>
                <img src={Request.PRODUCT_IMAGE + product?.productImage} className='rounded-xl h-[120px] w-[140px] md:h-[190px] md:w-[220px]' alt={product?.productName} />
                <div className='flex justify-end items-end mt-[-2.5rem] mr-2'>
                    <div className='p-2 rounded-full bg-blue-100 w-8 h-8 flex justify-center items-center hover:bg-blue-200'>
                        <AiOutlinePlus size={30} className='cursor-pointer' onClick={() => AddToCart(product)} />
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