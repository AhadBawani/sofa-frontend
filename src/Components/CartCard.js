import React from 'react';
import { MdDelete } from 'react-icons/md';
import { IconButton } from "@mui/material";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import Request from '../RequestHandlers/Request/Request';
import { AddCartQuantity, DeleteCart, RemoveCartQuantity } from '../RequestHandlers/RequestHandler/RequestHandler';
import { useDispatch } from 'react-redux';

const CartCard = ({ data }) => {
    const dispatch = useDispatch();

    const handleDeleteCartItem = (id) => {
        DeleteCart(dispatch, id);
    }

    const handleRemoveQuantity = (id) => {
        RemoveCartQuantity(dispatch, id);
    }

    const handleAddQuantity = (id) => {
        AddCartQuantity(dispatch, id);
    }
    return (
        <div>
            {data?.map((item, index) => {
                return (
                    <div key={item?.productName} className="flex items-center m-1 p-2">
                        <div className="justify-start">
                            <img src={Request.PRODUCT_IMAGE + item?.productImage} className="rounded-xl h-[70px] w-[80px]" alt={item?.productName} />
                        </div>
                        <div className="flex-grow flex flex-col mx-2">
                            <div>
                                <span className="font-semibold text-lg">{item?.productName}</span>
                            </div>
                            <div>
                                <span>{item?.productPrice}</span>
                            </div>
                        </div>
                        <div className="flex space-x-2 ml-4">
                            {item?.quantity === 1 ? (
                                <IconButton size="small">
                                    <MdDelete style={{ color: 'black' }} onClick={() => handleDeleteCartItem(item?._id)} />
                                </IconButton>
                            ) : (
                                <IconButton size="small">
                                    <AiOutlineMinus style={{ color: 'black' }} onClick={() => handleRemoveQuantity(item?._id)} />
                                </IconButton>
                            )}
                            <span className="text-lg font-medium">{item?.quantity}</span>
                            <IconButton size="small">
                                <AiOutlinePlus style={{ color: 'black' }} onClick={() => handleAddQuantity(item?._id)} />
                            </IconButton>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CartCard