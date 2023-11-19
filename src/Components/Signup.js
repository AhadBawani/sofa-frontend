import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'
import { UserSignupHandler } from '../RequestHandlers/RequestHandler/RequestHandler';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Signup = ({ setCurrentState }) => {
    const userObj = {
        firstName: null,
        lastName: null,
        phoneNumber: null,
        email: null,
        password: null,
        confirmPassword: null
    }
    const [errors, setErrors] = useState({
        firstName: false,
        lastName: false,
        phoneNumber: false,
        email: false,
        password: false,
        passwordMatch: false
    });
    const [userAlreadyExist, setUserAlreadyExist] = useState(false);
    const [userState, setUserState] = useState(userObj);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSignup = async () => {
        let valid = true;
        const newErrors = { ...errors };

        // Validation logic
        if (!userState.firstName) {
            newErrors.firstName = true;
            valid = false;
        } else {
            newErrors.firstName = false;
        }

        if (!userState.lastName) {
            newErrors.lastName = true;
            valid = false;
        } else {
            newErrors.lastName = false;
        }

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

        if (userState.password !== userState.confirmPassword) {
            newErrors.passwordMatch = true;
            valid = false;
        } else {
            newErrors.passwordMatch = false;
        }
        // Other validations for email, password, confirmPassword...

        if (valid) {
            // If valid, proceed with signup
            if (userState.password === userState.confirmPassword) {
                const signupObj = {
                    firstName: userState.firstName,
                    lastName: userState.lastName,
                    phoneNumber: userState.phoneNumber,
                    email: userState.email,
                    password: userState.password
                }
                try {
                    await UserSignupHandler(dispatch, navigate, signupObj);
                    // Proceed with successful signup
                } catch (errorMessage) {
                    // Handle the error message (errorMessage) here
                    if (errorMessage?.message === 'user already exists!') {
                        setUserAlreadyExist(true);
                    }
                }
            }
        } else {
            // If validation fails, update errors state
            setErrors(newErrors);
        }
    }

    const onInput = (e) => {
        setUserState({ ...userState, [e.target.name]: e.target.value })
    }
    return (
        <div className='flex flex-col items-center space-y-3 w-full mx-4 p-4'>
            <div className="w-full flex justify-center space-x-4">
                <div className="flex-1">
                    <TextField
                        id="firstName"
                        label="First Name"
                        name="firstName"
                        variant="outlined"
                        className="w-full"
                        onInput={onInput}
                        error={errors.firstName}
                        helperText={errors.firstName ? 'First name is required' : ''}
                    />
                </div>
                <div className="flex-1">
                    <TextField
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        variant="outlined"
                        className="w-full"
                        onInput={onInput}
                        error={errors.lastName}
                        helperText={errors.lastName ? 'Last name is required' : ''}
                    />
                </div>
            </div>
            <div className="w-full flex justify-center space-x-4">
                <div className="flex-1">
                    <TextField
                        id="number"
                        label="Phone number"
                        variant="outlined"
                        className="w-full"
                        type="number"
                        sx={{
                            "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
                                display: "none",
                            },
                            "& input[type=number]": {
                                MozAppearance: "textfield",
                            },
                        }}
                        name="phoneNumber"
                        onInput={onInput}
                        error={errors.phoneNumber}
                        helperText={errors.phoneNumber ? 'Phone number is required' : ''}
                    />
                </div>
                <div className="flex-1">
                    <TextField
                        id="email"
                        label="Email (optional)"
                        variant="outlined"
                        className="w-full"
                        name="email"
                        onInput={onInput}
                    />
                </div>
            </div>
            <div className="w-full flex justify-center space-x-4">
                <div className="flex-1">
                    <TextField
                        id="password"
                        label="Password"
                        onInput={onInput}
                        variant="outlined"
                        className="w-full"
                        type="password"
                        name="password"
                        error={errors.password}
                        helperText={errors.password ? 'Password is required' : ''}
                    />
                </div>
                <div className="flex-1">
                    <TextField
                        id="confirmpassword"
                        label="Confirm Password"
                        onInput={onInput}
                        variant="outlined"
                        className="w-full"
                        type="password"
                        name="confirmPassword"
                        error={errors.passwordMatch}
                        helperText={errors.passwordMatch ? 'Confirm Password do not matches' : ''}
                    />
                </div>
            </div>
            {
                userAlreadyExist &&
                <div>
                    <span className='text-green-600 font-semibold text-lg'>User Already exists!</span>
                </div>
            }
            <Button className='w-3/4'
                style={{ backgroundColor: 'rgb(45,44,40)' }}
                variant='contained' onClick={handleSignup}>Signup</Button>
            <span className='text-[rgb(45,44,40)] font-semibold text-sm cursor-pointer'
                onClick={() => setCurrentState('login')}>Already have account?</span>
        </div>
    )
}

export default Signup;