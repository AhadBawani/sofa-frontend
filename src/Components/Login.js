import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { LoginHandler } from '../RequestHandlers/RequestHandler/RequestHandler';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = ({ setCurrentState }) => {
    const obj = {
        phoneNumber: null,
        password: null
    }
    const [userState, setUserState] = useState(obj);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleLogin = () => {
        LoginHandler(dispatch, navigate, userState);
    }
    const onInput = (e) => {
        setUserState({ ...userState, [e.target.name]: e.target.value });
    }
    return (
        <>
            <div className='my-4 w-full flex flex-col items-center space-y-3'>
                <TextField id="phonenumber" label="Phone Number"
                    variant="outlined" className='w-3/4' name='phoneNumber' onInput={onInput} />
                <TextField id="password" label="Password"
                    variant="outlined" className='w-3/4' type='password' name='password' onInput={onInput} />
                <Button className='w-3/4'
                    style={{ backgroundColor: 'rgb(45,44,40)' }}
                    variant='contained' onClick={handleLogin}>Login</Button>

                <span className='text-[rgb(45,44,40)] font-semibold text-sm cursor-pointer'
                    onClick={() => setCurrentState('signup')}>Create Account?</span>
            </div>
        </>
    )
}

export default Login