'use client';

import React from "react";
import colors from "@/app/styles/colors";
import IconButton from '@mui/material/IconButton';
import { SvgIconComponent } from "@mui/icons-material";


interface IconButtonProps{
    icon: SvgIconComponent;
    label: string;
    href: string;
}

export default function CustomIconButton({ icon: Icon, label, href }: IconButtonProps){

    const handleClick = () => {
        window.open(href, '_blank', 'noopener,noreferrer');
    };

    return(
        <IconButton 
            aria-label={label}
            sx={{
                backgroundColor: colors.white,
                color: colors.primaryGray,
                "&:hover": {
                    backgroundColor: colors.white,
                    boxShadow: "0px 0px 16px 0px rgba(0, 0, 0, 0.3)",
                }
            }}
            onClick={handleClick}
        >
            <Icon />
        </IconButton>
    );
}