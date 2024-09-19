import colors from "@/app/styles/colors";
import { Typography } from "@mui/material";
import Image from "next/image";
import placeholderImg from "./img_placeholder.png"

interface PlaceholderProps {
    label: string;
}

export default function Placeholder({label}: PlaceholderProps) {
    return (
        <div
            style={{ 
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "24px",
                padding: "40px",
            }}
        >
            <Image src={placeholderImg} alt="placholder" width={300} height={300}/>
            <Typography component="h3" sx={{ color: colors.secondaryGray}}>{label} is under construction.</Typography>
        </div>
    );
}