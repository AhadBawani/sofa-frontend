import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'
import { UserSignupHandler } from '../RequestHandlers/RequestHandler/RequestHandler';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Signup = ({ setCurrentState }) => {
    const userObj = {
        username: null,
        phoneNumber: null,
        email: null,
        password: null,
        confirmPassword: null
    }
    const [userState, setUserState] = useState(userObj);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSignup = () => {
        if(userState.password === userState.confirmPassword){
            const signupObj = {
                username:userState.username,
                phoneNumber:userState.phoneNumber,
                email:userState.email,
                password:userState.password
            }
            UserSignupHandler(dispatch, navigate,signupObj);
        }
    }

    const onInput = (e) => {
        setUserState({ ...userState, [e.target.name]: e.target.value })
    }
    return (
        <div className='flex flex-col items-center space-y-3 w-full m-4'>
            <TextField id="username" label="Username" name='username'
                variant="outlined" className='w-3/4' onInput={onInput} />
            <TextField id="number" label="Phone number"
                variant="outlined" className='w-3/4' type='number'
                sx={{
                    "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
                        display: "none",
                    },
                    "& input[type=number]": {
                        MozAppearance: "textfield",
                    },
                }} name='phoneNumber' onInput={onInput} />
            <TextField id="email" label="Email (optional)"
                variant="outlined" className='w-3/4' name='email' onInput={onInput} />
            <TextField id="password" label="Password" onInput={onInput}
                variant="outlined" className='w-3/4' type='password' name='password' />
            <TextField id="confirmpassword" label="Confirm Password" onInput={onInput}
                variant="outlined" className='w-3/4' type='password' name='confirmPassword' />

            <Button className='w-3/4'
                style={{ backgroundColor: 'rgb(45,44,40)' }}
                variant='contained' onClick={handleSignup}>Signup</Button>
            <span className='text-[rgb(45,44,40)] font-semibold text-sm cursor-pointer'
                onClick={() => setCurrentState('login')}>Already have account?</span>
        </div>
    )
}

export default Signup;