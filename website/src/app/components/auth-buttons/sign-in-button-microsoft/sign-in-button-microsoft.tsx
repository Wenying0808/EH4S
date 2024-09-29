"use client"

import { Button } from "@mui/material";
import MicrosoftIcon from '@mui/icons-material/Microsoft';
import { signInWithGoogle } from "../auth-actions";
import { useTransition } from 'react';
import colors from "@/app/styles/colors";

interface SignInMicrosoftButtonProps {
  disabled: boolean
}
 
export default function SignInoMicrosoftButton( { disabled }: SignInMicrosoftButtonProps) {
  const [isPending, startTransition] = useTransition()
  return (
    <Button
      onClick={() => startTransition(() => signInWithGoogle())}
      disabled={isPending || disabled}
      fullWidth
            variant="contained"
            type="submit"
            sx={{ mt: 2, backgroundColor: colors.calypso }}
            startIcon={<MicrosoftIcon />}
    >
      {isPending ? 'Signing in...' : 'Continue with Microsoft'}
    </Button>
  )
} 