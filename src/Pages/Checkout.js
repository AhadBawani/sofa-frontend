import React, { useEffect, useState } from 'react';
import CartCard from '../Components/CartCard';
import { useSelector } from 'react-redux';
import Summary from '../Components/Summary';
import CustomerDetail from '../Components/CustomerDetail';
import BillingAddress from '../Components/BillingAddress';

const Checkout = () => {
    const user = useSelector((state) => state?.User?.user);
    const userCart = useSelector((state) => state?.User?.userCart) || [];
    const [count, setCount] = useState();

    useEffect(() => {
        let tempCount = 0;
        userCart.map((item) => {
            tempCount += parseInt(item?.quantity);
        })
        setCount(tempCount);
    }, [userCart])
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
        <div className='flex justify-center space-x-4 m-8'>
            {
                isMobile ?
                    <>
                        <div className='flex flex-col w-full'>
                            <div className='border border-gray-300 rounded-xl'>
                                <CustomerDetail />
                            </div>
                            <div className='border border-gray-300 rounded-xl p-3'>
                                <div className='text-gray-600 text-2xl font-bold px-2 py-4 bg-gray-300 rounded-xl'>
                                    YOUR CART ITEM ({count})
                                </div>
                                <CartCard data={userCart} />
                            </div>
                            <div className='border border-gray-300 rounded-xl mt-2 p-4'>
                                <Summary data={userCart} />
                            </div>
                            <div className='border border-gray-300 rounded-xl mt-2'>
                                <BillingAddress user={user} userCart={userCart} />
                            </div>
                        </div>

                    </>
                    :
                    <>
                        <div className='flex flex-col w-2/3'>
                            <div className='border border-gray-300 rounded-xl'>
                                <CustomerDetail />
                            </div>
                            <div className='border border-gray-300 rounded-xl mt-2'>
                                <BillingAddress user={user} userCart={userCart} />
                            </div>
                        </div>
                        <div className='flex flex-col w-1/3'>
                            <div className='border border-gray-300 rounded-xl p-3'>
                                <div className='text-gray-600 text-3xl font-bold px-4 py-2 bg-gray-300 rounded-xl'>
                                    YOUR CART ITEM ({count})
                                </div>
                                <CartCard data={userCart} />
                            </div>
                            <div className='border border-gray-300 rounded-xl mt-2 p-4'>
                                <Summary data={userCart} />
                            </div>
                        </div>
                    </>
            }
        </div>
    )
}

export default Checkout;