import React from "react";
import "./sectionSubpageIntro2.css";
import Image, { StaticImageData } from "next/image";

interface SectionSubpageIntro2Props{
    highlight: string;
    title: string;
    description: string;
    image: StaticImageData;
}

export default function SectionSubpageIntro2 ({ highlight, title, description, image }: SectionSubpageIntro2Props) {
    return(
        <div className="section-subpage-intro"> 
            <div className="section-title-highlight center">{highlight}</div>
            <div className="section-subpage-intro-title">{title}</div>
            <div className="section-subpage-intro-image">
                <Image src={image} alt="section-subpage-intro-image" width={990} height={530} layout="responsive"/>
            </div>
            <div className="section-subpage-intro-description">{description}</div>
        </div>
    );
}