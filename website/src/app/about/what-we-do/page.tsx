import Navbar from "@/app/components/navbar/navbar";
import SectionPageIntro from "@/app/components/section-page-intro/sectionPageIntro";
import SectionSubpageIntro2 from "@/app/components/section-subpage-intro2/sectionSubpageIntro2";
import IntroCard from "@/app/components/intro-card/introCard";
import FooterBanner from "@/app/components/footer-banner/footerBanner";
import Footer from "@/app/components/footer/footer";
import { introCardData } from "@/app/data/introcard-data";
import SubpageIntroImg from "../../assets/About-What-We-Do/img_WWD-subpageintro.png";


export default function WhatWeDo() {
    return(
        <div className="page">
            <Navbar/>
            <div className="page-container">
                <SectionPageIntro 
                    title="About us" 
                    description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
                />
                <SectionSubpageIntro2
                    highlight="Header Highlight" 
                    title="What We Do?" 
                    description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna" 
                    image={SubpageIntroImg}
                />
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