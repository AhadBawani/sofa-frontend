import React, { useEffect, useState } from 'react';
import { MdOutlinePending } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import Request from '../RequestHandlers/Request/Request';
import { MdOutlineCurrencyRupee } from "react-icons/md";
import MobileViewUserOrderCard from './MobileViewUserOrderCard';

const UserOrderCards = ({ order }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])
    return (
        <div className='border border-gray-300 rounded-xl mb-8 h-auto'>
            {
                isMobile
                    ?
                    <>
                        <MobileViewUserOrderCard order={order} />
                    </>
                    :
                    <>
                        <div className='flex justify-between px-4 py-2 text-gray-600 text-base font-semibold'>
                            <span>Order Date</span>
                            <span>Order ID</span>
                            <span>Order Invoice</span>
                            <span>Order Status</span>
                        </div>
                        <div className='flex justify-between pl-2 text-xl font-semibold'>
                            <span>{order?.orderDate?.split(" ")[0]}</span>
                            <span>{order?.orderId}</span>
                            <span>{order?.orderInvoice}</span>
                            <span>
                                {
                                    order?.orderDelivered ?
                                        <>
                                            <div className='flex bg-green-700 rounded-3xl p-2 text-white mr-1'>
                                                <span>Delivered</span>
                                                <span><FaCheckCircle className='ml-2 mt-1' /></span>
                                            </div>
                                        </>
                                        :
                                        <>
                                            <div className='flex bg-yellow-500 rounded-3xl p-2 text-white mr-1'>
                                                <span>Pending </span>
                                                <span><MdOutlinePending className='ml-2 mt-1' /></span>
                                            </div>
                                        </>
                                }
                            </span>
                        </div>
                        <div className='flex justify-center m-4'>
                            {order?.product?.slice(0, 3)?.map((productItem, index) => (
                                <img
                                    key={index}
                                    src={Request.PRODUCT_IMAGE + productItem?.productImage}
                                    style={{ height: "100px", width: "100px", borderRadius: "8px", margin: "4px" }}
                                    alt={`Product ${index}`}
                                />
                            ))}
                            {order?.product?.length > 3 && (
                                <div className='bg-gray-800 h-[100px] w-[100px] rounded-lg ml-1 
                                flex justify-center items-center text-white font-semibold text-xl'>
                                    <span>+ {order?.product?.length - 3}</span>
                                </div>
                            )}
                        </div>
                        <div>
                            <div className='flex justify-between text-gray-600 text-base font-semibold px-4'>
                                <span>Total</span>
                                <span>Details</span>
                            </div>
                            <div className='flex justify-between text-xl font-semibold px-2 mb-2'>
                                <div className='flex'>
                                    <MdOutlineCurrencyRupee className='mt-1 mr-1' />{order?.total}
                                </div>
                                <div>
                                    <span>{order?.phoneNumber}</span>
                                </div>
                            </div>
                        </div>
                    </>
            }
        </div>
    )
}

export default UserOrderCards;