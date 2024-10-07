/*"use client";*/

import React from 'react';
import colors from '@/app/styles/colors';
import { Box, Typography } from '@mui/material';
import SignInGoogleButton from '@/app/components/auth-buttons/sign-in-button-google/sign-in-button-google'; 
import SignInoMicrosoftButton from '@/app/components/auth-buttons/sign-in-button-microsoft/sign-in-button-microsoft';

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
          <SignInGoogleButton disabled={false}/>
          <SignInoMicrosoftButton disabled={true}/>
        </Box>
    </div>
   
  );
};