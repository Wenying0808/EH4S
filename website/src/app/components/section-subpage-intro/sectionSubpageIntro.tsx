import React from "react";
import "./sectionSubpageIntro.css";
import Image, { StaticImageData } from "next/image";

interface SectionSubpageIntroProps{
    highlight: string;
    title: string;
    description: string;
    image: StaticImageData;
}

export default function SectionSubpageIntro ({ highlight, title, description, image }: SectionSubpageIntroProps) {
    return(
        <div className="section-subpage-intro">
            <div className="section-subpage-intro-image">
                <Image src={image} alt="section-subpage-intro-image" width={300} height={300} layout="responsive"/>
            </div>
            <div className="section-subpage-intro-textdiv">
                <div className="section-title-highlight">{highlight}</div>
                <div className="section-subpage-intro-title">{title}</div>
                <div className="section-subpage-intro-description">{description}</div>
            </div>
        </div>
    );
}