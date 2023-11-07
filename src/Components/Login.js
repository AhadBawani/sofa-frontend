import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import '../Styles/Login.css';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        // Add your login logic here
    };

    return (
        <div className="login-page flex items-center justify-center h-screen bg-gray-200">
            <div className="bg-white bg-opacity-80 p-8 rounded-md animate__animated animate__fadeIn">
                <h2 className="text-2xl mb-4 text-gray-800">Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <TextField
                            label="Username"
                            variant="outlined"
                            fullWidth
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <TextField
                            type="password"
                            label="Password"
                            variant="outlined"
                            fullWidth
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <Button variant="contained" type="submit" fullWidth>
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
