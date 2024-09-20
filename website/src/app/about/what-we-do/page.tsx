import "./whatwedo.css";
import Navbar from "@/app/components/navbar/navbar";
import SectionPageIntro from "@/app/components/section-page-intro/sectionPageIntro";
import SectionSubpageIntro2 from "@/app/components/section-subpage-intro2/sectionSubpageIntro2";
import Metric from "@/app/components/metric/metric";
import { metricData } from "@/app/data/metric-data";
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
                    description="China is a key global actor and a leading economic and technological power. China’s increasing relevance in the geopolitical system, its various specificities, complexities, and goals as well as its rapid evolution and new policy directions pose challenge to the EU’s capacity to better understand contemporary China. Besides, the EU needs to get to know and understand China on its own terms: not through the lens of other external sources but from its own European perspective." 
                    image={SubpageIntroImg}
                />
                <div className="section-metrics">
                    {metricData.map((metric, index) => (
                        <Metric key={index} label={metric.label} value={metric.value}/>
                    ))}
                </div>
                <div className="section-objectives">
                    <div className="section-objectives-intro">
                        <div className="section-title-highlight">Section Highlight</div>
                        <div className="section-title">Objectives</div>
                        <div className="section-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</div>
                    </div>
                    <div className="section-objectives-intro-cards">
                        {introCardData.map((intro, index) => (
                            <IntroCard
                            key={index}
                            title={intro.title}
                            description={intro.description}
                            icon={intro.icon}
                            />
                        ))}
                    </div> 
                </div>


                <FooterBanner/>
                <Footer/>
            </div>
        </div>
    );
}