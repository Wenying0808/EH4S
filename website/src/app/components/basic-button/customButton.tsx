import React from "react";
import { Button } from "@mui/material";
import colors from "@/app/styles/colors";

interface CustomButtonProps {
    label: string;
    variant: "outlined" | "contained"; 
    disabled?: boolean;
    onClick?: () => void;
}

export default function CustomButton ({ label, variant, disabled = false, onClick }: CustomButtonProps) {
    return (
        <Button 
            variant={variant}
            disabled={disabled}
            onClick={onClick}
            sx={{ 
                borderRadius: "15px",
                padding: "8px 20px",
                fontSize: "12px",
                fontWeight: "500",
                lineHeight: "14px",
                color: variant === "outlined" ? colors.white : colors.primaryGray,
                backgroundColor: variant === "outlined" ? "transparent" : colors.white,
                border: variant === "outlined" ? `2px solid ${colors.white}` : "none",
            }}
        >
            {label}
        </Button>
    );
};