import React, { useEffect, useState } from 'react';
import { FaRupeeSign } from "react-icons/fa";

const Summary = ({ data }) => {
    const [total, setTotal] = useState();
    useEffect(() => {
        if (data.length > 0) {
            let amount = 0;
            data.map((item) => {
                let quantity = item?.quantity;
                let price = item?.productPrice;
                amount += (parseInt(quantity) * parseInt(price));
            })
            setTotal(amount);
        }
    }, [data])
    return (
        <div>
            <div className='bg-gray-300 text-gray-700 text-3xl font-bold p-3 rounded-lg mb-4'>
                SUMMARY
            </div>
            <div className='text-gray-700 text-lg flex justify-between mx-4 sm:mx-8 my-2 font-semibold'>
                <span>SUBTOTAL</span>
                <span>{total}</span>
            </div>
            <div className='text-gray-700 text-lg font-semibold flex justify-between mx-4 sm:mx-8 my-2'>
                <span>SHIPPING & HANDLING</span>
                <span className='text-orange-400'>Free</span>
            </div>
            <div className='text-gray-700 text-2xl font-bold flex justify-between mx-4 sm:mx-8 my-2'>
                <span>TOTAL</span>
                <span className='font-bold flex'>
                    <span className='mt-1 mr-1'><FaRupeeSign /></span>
                    {total}
                    </span>
            </div>
        </div>
    )
}

export default Summary