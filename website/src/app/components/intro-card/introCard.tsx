import React from 'react';
import "./introCard.css";
import { SvgIconComponent } from "@mui/icons-material";
import Icon from '@mui/material/Icon';

interface CardProps {
    icon: SvgIconComponent;
    title: string;
    description: string;
}

export default function IntroCard ({ icon: Icon, title, description, }: CardProps){
    return (
        <div className="intro-card">
            <div className="intro-card-icon-placeholder">
                <Icon style={{ fontSize: 40 }} />
            </div>
            <div className="intro-card-title">{title}</div>
            <div className="intro-card-description">{description}</div>
        </div>
    );
}
