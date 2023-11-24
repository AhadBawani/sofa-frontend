import React, { useEffect, useState } from 'react';
import { GetUserOrderHandler } from '../RequestHandlers/RequestHandler/RequestHandler';
import UserOrderCards from '../Components/UserOrderCards';

const UserOrders = ({ user }) => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        GetUserOrderHandler(user?._id, setOrders);
    }, [user])
    return (
        <div>
            {
                orders.length > 0
                &&
                <>
                    <div className='m-4 p-4'>
                        {
                            orders.map((item, index) => {
                                return <>
                                    <UserOrderCards order={item}/>
                                </>
                            })
                        }
                    </div>
                </>
            }
        </div>
    )
}

export default UserOrders;