import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { LoginHandler } from '../RequestHandlers/RequestHandler/RequestHandler';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = ({ setCurrentState }) => {
    const [userState, setUserState] = useState({
        phoneNumber: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        phoneNumber: false,
        password: false
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = () => {
        let valid = true;
        const newErrors = { ...errors };

        // Validation logic
        if (!userState.phoneNumber) {
            newErrors.phoneNumber = true;
            valid = false;
        } else {
            newErrors.phoneNumber = false;
        }

        if (!userState.password) {
            newErrors.password = true;
            valid = false;
        } else {
            newErrors.password = false;
        }

        if (valid) {
            // If valid, proceed with login
            LoginHandler(dispatch, navigate, userState);
        } else {
            // If validation fails, update errors state
            setErrors(newErrors);
        }
    };

    const onInput = (e) => {
        setUserState({ ...userState, [e.target.name]: e.target.value });
    };

    return (
        <>
            <div className='my-4 w-full flex flex-col items-center space-y-3'>
                <TextField
                    id="phonenumber"
                    label="Phone Number"
                    variant="outlined"
                    className='w-3/4'
                    name='phoneNumber'
                    value={userState.phoneNumber}
                    onChange={onInput}
                    error={errors.phoneNumber}
                    helperText={errors.phoneNumber ? 'Phone number is required' : ''}
                />
                <TextField
                    id="password"
                    label="Password"
                    variant="outlined"
                    className='w-3/4'
                    type='password'
                    name='password'
                    value={userState.password}
                    onChange={onInput}
                    error={errors.password}
                    helperText={errors.password ? 'Password is required' : ''}
                />
                <Button
                    className='w-3/4'
                    style={{ backgroundColor: 'rgb(45,44,40)' }}
                    variant='contained'
                    onClick={handleLogin}
                >
                    Login
                </Button>

                <span
                    className='text-[rgb(45,44,40)] font-semibold text-sm cursor-pointer'
                    onClick={() => setCurrentState('signup')}
                >
                    Create Account?
                </span>
            </div>
        </>
    );
};

export default Login;
