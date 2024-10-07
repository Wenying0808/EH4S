import CustomButton from "../../basic-button/customButton";
import { signOut } from "next-auth/react"
import { useSession } from "next-auth/react";

interface NavbarAuthButtonsProps {
    signUp: () => void;
    signIn: () => void;
}
 
export default function NavbarAuthButtons({ signUp, signIn }: NavbarAuthButtonsProps) {

    const { data: session } = useSession();

  return (
    <div className="navbar-buttons" style={{ display: "flex", gap: "20px"}}>
        {!session ? (
            <>
                <CustomButton label="Sign Up" variant="contained" onClick={signUp}/>
                <CustomButton label="Sign In" variant="outlined" onClick={signIn}/>
            </>
        ) : (
            <>
                <div className="navbar-buttons-welcome-text"> {`Hi, ${session.user?.name}`}</div>
                <CustomButton label="Sign Out" variant="outlined" onClick={() => signOut({ redirectTo: "/" })}/>
            </>
        )}
    </div>
  )
} 