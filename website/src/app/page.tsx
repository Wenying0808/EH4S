"use client";

import Navbar from "./components/navbar/navbar";
import SectionPageIntro from "./components/section-page-intro/sectionPageIntro";
import Section from "./components/section/section";
import { sectionData } from "./data/section-data";
import FooterBanner from "./components/footer-banner/footerBanner";
import Footer from "./components/footer/footer";

export default function Home() {
  return(
    <div className="page">
        <Navbar/>
        <div className="page-container">
          <SectionPageIntro title="About us" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."/>
          <div 
            className="page-container-sections" 
            style={{ 
              width: "100vw", 
              display: "flex",
              flexDirection: "column",
              gap: 0,
            }}
          >
            {sectionData.map((section, index) => (
              <Section
                key={index}
                title={section.title}
                description={section.description}
                imgPosition={section.imgPosition}
              />
            ))}
          </div>
          <FooterBanner/>  
          <Footer/>
        </div>
    </div>
  );
}
