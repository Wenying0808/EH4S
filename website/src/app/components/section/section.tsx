import React from 'react';
import Image from 'next/image';
import colors from '@/app/styles/colors';
import placeholderImg from './img_placeholder block.svg'

interface SectionProps {
    title: string;
    description: string;
    imgPosition: "left" | "right"
}

export default function Section ({ title, description, imgPosition }: SectionProps){
    return (
        <div 
            className="section" 
            style={{
                display: "flex",
                flexDirection: imgPosition === "left" ? "row" : "row-reverse",
                padding: "60px",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: "60px",
                alignSelf: "stretch",
                backgroundColor: imgPosition==="left" ? colors.white : colors.alabaster,
                
            }}
        >
            <div 
                className="section-img" 
                style={{
                    width: "500px",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: imgPosition==="left" ? "flex-start" : "flex-end"
                }}
            >
                <Image src={placeholderImg} alt="section image" width={200} height={200}/>
            </div>
            <div 
                className="section-intro"
                style={{
                    width: "500px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px"
                }}
            >
                <div className="section-title">
                    {title}
                </div>
                <div className="section-description">
                    {description}
                </div>
            </div>

        </div>
    );
}
