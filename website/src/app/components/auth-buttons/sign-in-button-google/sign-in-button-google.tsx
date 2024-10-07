"use client"

import { Button } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import { signInWithGoogle } from "../auth-actions";
import { useTransition } from 'react';
import colors from "@/app/styles/colors";

interface SignInGoogleButtonProps {
  disabled: boolean
}
 
export default function SignInGoogleButton( { disabled }: SignInGoogleButtonProps) {
  const [isPending, startTransition] = useTransition()
  return (
    <Button
      onClick={() => startTransition(() => signInWithGoogle())}
      disabled={isPending || disabled}
      fullWidth
            variant="contained"
            type="submit"
            sx={{ mt: 2, backgroundColor: colors.calypso }}
            startIcon={<GoogleIcon />}
    >
      {isPending ? 'Signing in...' : 'Continue with Google'}
    </Button>
  )
} 