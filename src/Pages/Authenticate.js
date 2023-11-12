import React, { useState } from 'react';
import image from '../Images/Background/hero-bg.png';
import LoginPage from '../Components/Login';
import Signup from '../Components/Signup';
import { Avatar } from '@mui/material';

const Authenticate = () => {
    const [currentState, setCurrentState] = useState('login');
    return (
        <div style={{
            height: '100vh', width: '100vw', backgroundImage: `url(${image})`,
        }} className='flex justify-center md:justify-end items-center'>
            <div className='max-h-[37rem] min-w-[20rem] md:min-w-[25rem] bg-white rounded-xl md:mr-[5rem]
             flex flex-col justify-center items-center'>
                <div className='mt-4'>
                    <Avatar sx={{ width: 120, height: 120 }}></Avatar>
                </div>
                {
                    currentState === 'login'
                        ?
                        <LoginPage setCurrentState={setCurrentState} />
                        :
                        <Signup setCurrentState={setCurrentState} />
                }
            </div>
        </div>
    )
}

export default Authenticate;