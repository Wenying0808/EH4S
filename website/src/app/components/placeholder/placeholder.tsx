import "./placeholder.css";
import colors from "@/app/styles/colors";
import { Typography } from "@mui/material";
import Image from "next/image";
import placeholderImg from "./img_placeholder.png"

interface PlaceholderProps {
    label: string;
}

export default function Placeholder({label}: PlaceholderProps) {
    return (
        <div className="placeholder">
            <Image src={placeholderImg} alt="placholder" width={280} height={280}/>
            <Typography component="h3" sx={{ color: colors.secondaryGray}}>{label} Page Placeholder</Typography>
        </div>
    );
}