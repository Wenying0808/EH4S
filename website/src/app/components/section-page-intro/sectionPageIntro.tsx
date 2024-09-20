import React from "react";
import "./sectionPageIntro.css";

interface SectionPageIntroProps{
    title: string;
    description: string;
}

export default function SectionPageIntro ({ title, description}: SectionPageIntroProps) {
    return(
        <div className="section-page-intro">
            <div className="section-page-intro-title">{title}</div>
            <div className="section-page-intro-description">{description}</div>
        </div>
    );
}