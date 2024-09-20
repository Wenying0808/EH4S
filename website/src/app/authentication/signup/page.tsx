"use client";

import React, { useState } from 'react';
import colors from '@/app/styles/colors';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

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
          margin: 'auto', 
          mt: 4, 
          padding: "20px", 
          backgroundColor: colors.white, 
          borderRadius: "10px",

        }}>
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
        >
          Connect with Gmail
        </Button>
        <Button
          fullWidth
          variant="contained"
          onClick={handleMicrosoftSignUp}
          disabled={!isFormFilled}
          sx={{ mt: 2, backgroundColor: colors.calypso  }}
        >
          Connect with Microsoft
        </Button>
      </Box>
    </div>
  );
};
