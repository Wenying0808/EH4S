import React from "react";
import colors from "@/app/styles/colors";
import IconButton from '@mui/material/IconButton';
import { SvgIconComponent } from "@mui/icons-material";


interface IconButtonProps{
    icon: SvgIconComponent,
    label: string,
}

export default function CustomIconButton({ icon: Icon, label }: IconButtonProps){
    return(
        <IconButton 
            aria-label={label}
            sx={{
                backgroundColor: colors.white,
                color: colors.primaryGray,
                "&:hover": {
                    backgroundColor: colors.white,
                    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.2)",
                }
            }}
        >
            <Icon />
        </IconButton>
    );
}