import React from "react";
import colors from "@/app/styles/colors";
import { Typography } from "@mui/material";

interface CustomTabProps {
    label: string;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

export default function CustomTab({ label, onClick }: CustomTabProps) {
    return (
        <Typography
            onClick={onClick}
            sx={{ 
                padding: "2px",
                color: colors.white,
                fontFamily: "Roboto",
                fontSize: "16px",
                fontWeight: "500",
                lineHeight: "21px",
                textTransform: "capitalize",
                "&:hover": {
                    borderBottom: `2px solid ${colors.highlight}`,
                },
                cursor: "pointer",
            }}
        > 
            {label}
        </Typography>
    );
};