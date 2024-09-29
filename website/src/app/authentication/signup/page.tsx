"use client";

import React, { useState } from 'react';
import colors from '@/app/styles/colors';
import { TextField, Box, Typography } from '@mui/material';
import SignInGoogleButton from '@/app/components/auth-buttons/sign-in-button-google/sign-in-button-google'; 
import SignInoMicrosoftButton from '@/app/components/auth-buttons/sign-in-button-microsoft/sign-in-button-microsoft';

export default function SignUp(){
  const [company, setCompany] = useState('');
  const [jobPosition, setJobPosition] = useState('');

  const isFormFilled = jobPosition.trim() !== '' && company.trim() !== '';

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
        <SignInGoogleButton disabled={!isFormFilled}/>
        <SignInoMicrosoftButton disabled={true}/>
      </Box>
    </div>
  );
};
