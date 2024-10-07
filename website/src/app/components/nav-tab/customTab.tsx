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
                color: colors.white,
            }}
        > 
            {label}
        </div>
    );
};