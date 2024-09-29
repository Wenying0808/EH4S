/*"use client";*/

import React from 'react';
import colors from '@/app/styles/colors';
import { Button, Box, Typography } from '@mui/material';
import MicrosoftIcon from '@mui/icons-material/Microsoft';
import SignInGoogleButton from '@/app/components/auth-buttons/sign-in-button-google/sign-in-button-google'; 

export default async function SignIn(){

  return (
    <div className="page-signup" style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Box 
            sx={{ 
                maxWidth: 320, 
                mt: 4, 
                padding: "20px", 
                backgroundColor: colors.white, 
                borderRadius: "10px",
                boxShadow: "0px 3px 30px 0px rgba(0, 0, 0, 0.25)",
            }}
        >
        <Typography variant="h4" gutterBottom>Sign In</Typography>
        <SignInGoogleButton/>
        <Button
            fullWidth
            variant="contained"
            sx={{ mt: 2, backgroundColor: colors.calypso }}
            startIcon={<MicrosoftIcon />}
        >
            Connect with Microsoft
        </Button>
        </Box>
    </div>
   
  );
};