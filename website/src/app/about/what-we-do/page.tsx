import Navbar from "@/app/components/navbar/navbar";
import IntroCard from "@/app/components/intro-card/introCard";
import FooterBanner from "@/app/components/footer-banner/footerBanner";
import Footer from "@/app/components/footer/footer";
import { introCardData } from "@/app/data/introcard-data";

export default function WhatWeDo() {
    return(
        <div className="page">
            <Navbar/>
            <div className="page-container">
                <div className="intro-cards" 
                    style={{ 
                        display: "flex",
                        padding: "40px",
                        alignItems: "flex-start",
                        alignContent: "flex-start",
                        gap: "40px",
                        flexWrap: "wrap",
                        maxWidth: "920px"
                    }}
                >
                    {introCardData.map((intro, index) => (
                        <IntroCard
                        key={index}
                        title={intro.title}
                        description={intro.description}
                        icon={intro.icon}
                        />
                    ))}
                </div> 
                <FooterBanner/>
                <Footer/>
            </div>
        </div>
    );
}