import React from 'react';
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { MdOutlinePending } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import Request from '../RequestHandlers/Request/Request';

const MobileViewUserOrderCard = ({ order }) => {
    return (

        <div>
            <div className='flex justify-between px-4 py-2 text-gray-600 text-base font-semibold'>
                <span>Order Date</span>
                <span>Order Status</span>
            </div>
            <div className='flex justify-between pl-2 text-lg font-semibold'>
                <span>{order?.orderDate?.split(" ")[0]}</span>
                <span>
                    {
                        order?.orderDelivered ?
                            <>
                                <div className='flex bg-green-700 rounded-3xl p-2 text-white mr-2'>
                                    <span>Delivered</span>
                                    <span><FaCheckCircle className='ml-2 mt-1' /></span>
                                </div>
                            </>
                            :
                            <>
                                <div className='flex bg-yellow-500 rounded-3xl p-2 text-white mr-2'>
                                    <span>Pending </span>
                                    <span><MdOutlinePending className='ml-2 mt-1' /></span>
                                </div>
                            </>
                    }
                </span>
            </div>
            <div className='flex flex-wrap justify-center m-4'>
                {order?.product?.slice(0, 3)?.map((productItem, index) => (
                    <img
                        key={index}
                        src={Request.PRODUCT_IMAGE + productItem?.productImage}
                        style={{ height: "100px", width: "100px", borderRadius: "8px", margin: "4px" }}
                        alt={`Product ${index}`}
                    />
                ))}
                {order?.product?.length > 3 && (
                    <div className='bg-gray-800 h-[100px] w-[100px] rounded-lg ml-1 flex justify-center items-center text-white font-semibold text-xl'>
                        <span>+ {order?.product?.length - 3}</span>
                    </div>
                )}
            </div>
            <div className='flex justify-between px-4 py-2 text-gray-600 text-base font-semibold'>
                <span>Order ID</span>
                <span>Order Invoice</span>
            </div>
            <div className='flex justify-between px-2 text-xl font-semibold'>
                <span>{order?.orderId}</span>
                <span>{order?.orderInvoice}</span>
            </div>
            <div className='flex justify-between px-4 py-2 text-gray-600 text-base font-semibold'>
                <span>Order Total</span>
                <span>Details</span>
            </div>
            <div className='flex justify-between px-2 text-xl font-semibold mb-2'>
                <div className='flex'>
                    <span><MdOutlineCurrencyRupee className='mt-1 mr-1' /></span>
                    <span>{order?.total}</span>
                </div>
                <div>
                    <span>{order?.phoneNumber}</span>
                </div>
            </div>
        </div>
    )
}

export default MobileViewUserOrderCard