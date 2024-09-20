import React from "react";
import "./customTab.css";
import colors from "@/app/styles/colors";


interface CustomTabProps {
    label: string;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

export default function CustomTab({ label, onClick }: CustomTabProps) {
    return (
        <div
            className="navbar-tab"
            onClick={onClick}
            style={{ 
                display: "flex",
                padding: "2px",
                color: colors.white,
                fontFamily: "Roboto",
                fontSize: "16px",
                fontWeight: "500",
                lineHeight: "21px",
                textTransform: "capitalize",
                cursor: "pointer",
            }}
        > 
            {label}
        </div>
    );
};