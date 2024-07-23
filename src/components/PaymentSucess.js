import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const PaymentSucess = () => {
   const containerStyle = {
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center',
        width: '100vw', // Full viewport width
        height: '100vh', // Full viewport height
        backgroundColor: '#ffc0cb', // Pink background color
        margin: 0, // Remove any default margin
        padding: 0, // Remove any default padding
    };

    const messageStyle = {
        padding: '15px',
        border: '1px solid #f5c2c7',
        // borderRadius: '5px',
        backgroundColor: '#f8d7da',
        color: '#721c24',
        fontSize: '18px',
        fontWeight: 'bold',
    };

    const navigate = useNavigate()

const handleLogin = () => {
    navigate("/login")
}

    return (
        <Container style={containerStyle} maxWidth={false}>
            <Box style={messageStyle}>
                <button onClick={handleLogin}>
                    Payment Success. Please try again.
                </button>
            </Box>
        </Container>
    );
}

export default PaymentSucess;
