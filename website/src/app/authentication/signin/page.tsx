"use client";

import React from 'react';
import colors from '@/app/styles/colors';
import { Button, Box, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import GoogleIcon from '@mui/icons-material/Google';
import MicrosoftIcon from '@mui/icons-material/Microsoft';

export default function SignIn(){
  const router = useRouter();

  const handleGoogleSignIn = () => {
    // Implement Google authentication logic here
    router.push('/api/auth/google');
  };

  const handleMicrosoftSignIn = () => {
    // Implement Microsoft authentication logic here
    router.push('/api/auth/microsoft');
  };

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
        <Button
            fullWidth
            variant="contained"
            onClick={handleGoogleSignIn}
            sx={{ mt: 2, backgroundColor: colors.calypso }}
            startIcon={<GoogleIcon />}
        >
            Connect with Gmail
        </Button>
        <Button
            fullWidth
            variant="contained"
            onClick={handleMicrosoftSignIn}
            sx={{ mt: 2, backgroundColor: colors.calypso }}
            startIcon={<MicrosoftIcon />}
        >
            Connect with Microsoft
        </Button>
        </Box>
    </div>
   
  );
};