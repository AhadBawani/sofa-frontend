import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { PlaceOrderHandler } from '../RequestHandlers/RequestHandler/RequestHandler';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const BillingAddress = ({ user, userCart }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [userAddress, setUserAddress] = useState({
        address: null,
        landMark: null,
        city: null,
        postalCode: null
    })
    const [errors, setErrors] = useState({
        address: false,
        landMark: false,
        city: false,
        postalCode: false
    })
    const handleOrderNow = () => {        
        let valid = true;
        const newErrors = { ...errors };

        if (!userAddress.address) {
            newErrors.address = true;
            valid = false;
        } else {
            newErrors.address = false;
        }

        if (!userAddress.landMark) {
            newErrors.landMark = true;
            valid = false;
        } else {
            newErrors.landMark = false;
        }

        if (!userAddress.city) {
            newErrors.city = true;
            valid = false;
        } else {
            newErrors.city = false;
        }

        if (!userAddress.postalCode) {
            newErrors.postalCode = true;
            valid = false;
        } else {
            newErrors.postalCode = false;
        }

        if (valid) {
            const obj = {
                userId: user?._id,
                userCart:userCart,
                address:userAddress.address,
                landMark:userAddress.landMark,
                city:userAddress.city,
                postalCode:userAddress.postalCode
            }
            PlaceOrderHandler(dispatch, navigate, obj);
        } else {
            setErrors(newErrors);
        }
    }
    const onInput = (e) => {
        setUserAddress({ ...userAddress, [e?.target?.name]: e?.target?.value })
    }
    return (
        <div className='m-4 text-gray-600'>
            <h1 className='text-2xl font-bold'>Billing Address</h1>
            <div className='md:m-4 m-1 mt-2 md:p-4 p-1'>
                <div className="w-full flex justify-center space-x-4 mb-6">
                    <div className="flex-1">
                        <TextField
                            id="Address"
                            label="Address"
                            name="address"
                            variant="outlined"
                            className="w-full"
                            onInput={onInput}
                            value={userAddress.address}
                            error={errors.address}
                            helperText={errors.address ? 'Address is required' : ''}
                            required
                        />
                    </div>
                    <div className="flex-1">
                        <TextField
                            id="landMark"
                            label="Land Mark"
                            name="landMark"
                            variant="outlined"
                            className="w-full"
                            onInput={onInput}
                            value={userAddress.landMark}
                            error={errors.landMark}
                            helperText={errors.landMark ? 'Land mark is required' : ''}
                            required
                        />
                    </div>
                </div>
                <div className="w-full flex justify-center space-x-4">
                    <div className="flex-1">
                        <TextField
                            id="city"
                            label="City"
                            name="city"
                            variant="outlined"
                            className="w-full"
                            onInput={onInput}
                            value={userAddress.city}
                            error={errors.city}
                            helperText={errors.city ? 'City is required' : ''}
                            required
                        />
                    </div>
                    <div className="flex-1">
                        <TextField
                            id="PostalCode"
                            label="Postal Code"
                            name="postalCode"
                            variant="outlined"
                            className="w-full"
                            onInput={onInput}
                            value={userAddress.postalCode}
                            error={errors.postalCode}
                            helperText={errors.postalCode ? 'Post code is required' : ''}
                            required
                        />
                    </div>
                </div>
            </div>
            <div className='m-4 flex justify-center'>
                <button className='p-2 w-1/2 bg-gray-800 
                    text-white text-xl font-semibold rounded-full hover:bg-gray-900'
                    onClick={handleOrderNow}>
                    Order Now
                </button>
            </div>
        </div>
    )
}

export default BillingAddress