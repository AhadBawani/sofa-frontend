import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCartAction } from '../Redux/Actions/UsersAction';

const Product = ({ product }) => {
    const dispatch = useDispatch();
    const userCart = useSelector((state) => state?.User?.userCart) || [];
    const AddToCart = (product) => {
        const index = userCart.findIndex((item) => item?.id === product?.id);
        if (index > -1) {
            const obj = {
                id: 1,
                productImage: product?.productImage,
                productName: product?.productName,
                productPrice: product?.productPrice,
                quantity: (product?.quantity + 1)
            }
            dispatch(AddToCartAction(obj));
        }
        else {
            dispatch(AddToCartAction([...userCart, product]))
        }
    }
    return (
        <div>
            <div className='border border-gray-300 rounded-xl p-4 h-[220px] w-[240px]'>
                <img src={product?.productImage} className='rounded-xl' alt={product?.productName} />
                <div className='flex justify-end items-end mt-[-2.5rem] mr-2'>
                    <div className='p-2 rounded-full bg-blue-100 w-8 h-8 flex justify-center items-center hover:bg-blue-200'>
                        <AiOutlinePlus size={30} className='cursor-pointer' onClick={() => AddToCart(product)} />
                    </div>
                </div>
            </div>
            <div className='mt-2'>
                <div className='font-semibold lg:text-xl'>{product?.productName}</div>
                <div>{product?.productPrice}</div>
            </div>
        </div>
    )
}

export default Product;