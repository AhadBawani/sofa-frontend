import React from 'react';
import { TextField } from '@mui/material';
import { useSelector } from 'react-redux';

const CustomerDetail = () => {
    const user = useSelector((state) => state?.User?.user);
    return (
        <div className='m-4 text-gray-600'>
            <h1 className='text-2xl font-bold'>Customer Info</h1>
            <div className='m-1 md:m-4 p-1 md:p-4'>
                <div className="w-full flex justify-center space-x-4 mb-6">
                    <div className="flex-1">
                        <TextField
                            id="firstName"
                            label="First Name"
                            name="firstName"
                            variant="filled"
                            className="w-full"
                            value={user?.firstName}
                            inputProps={
                                { readOnly: true }
                            }
                        />
                    </div>
                    <div className="flex-1">
                        <TextField
                            id="lastName"
                            label="Last Name"
                            name="lastName"
                            variant="filled"
                            className="w-full"
                            value={user?.lastName}
                            inputProps={
                                { readOnly: true }
                            }
                        />
                    </div>
                </div>
                <div className="w-full flex justify-center space-x-4">
                    <div className="flex-1">
                        <TextField
                            id="phoneNumber"
                            label="Phone Number"
                            name="phoneNumber"
                            variant="filled"
                            className="w-full"
                            value={user?.phoneNumber}
                            inputProps={
                                { readOnly: true }
                            }
                        />
                    </div>
                    <div className="flex-1">
                        <TextField
                            id="email"
                            label="Email"
                            name="email"
                            variant="filled"
                            className="w-full"
                            value={user?.email}
                            inputProps={
                                { readOnly: true }
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerDetail