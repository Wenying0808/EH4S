"use client";

import React, { useState } from 'react';
import colors from '@/app/styles/colors';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import GoogleIcon from '@mui/icons-material/Google';
import MicrosoftIcon from '@mui/icons-material/Microsoft';

export default function SignUp(){
  const [company, setCompany] = useState('');
  const [jobPosition, setJobPosition] = useState('');
  const router = useRouter();

  const isFormFilled = jobPosition.trim() !== '' && company.trim() !== '';

  const handleGoogleSignUp = () => {
    // Implement Google authentication logic here
    router.push('/api/auth/google');
  };

  const handleMicrosoftSignUp = () => {
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
        <Typography variant="h4" gutterBottom>Sign Up</Typography>
        <TextField
          fullWidth
          label="Job Position"
          value={jobPosition}
          onChange={(e) => setJobPosition(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          margin="normal"
        />
        <Button
          fullWidth
          variant="contained"
          onClick={handleGoogleSignUp}
          disabled={!isFormFilled}
          sx={{ mt: 2 , backgroundColor: colors.calypso }}
          startIcon={<GoogleIcon />}
        >
          Connect with Gmail
        </Button>
        <Button
          fullWidth
          variant="contained"
          onClick={handleMicrosoftSignUp}
          disabled={!isFormFilled}
          sx={{ mt: 2, backgroundColor: colors.calypso }}
          startIcon={<MicrosoftIcon />}
        >
          Connect with Microsoft
        </Button>
      </Box>
    </div>
  );
};
