"use client";

import Navbar from "./components/navbar/navbar";
import Placeholder from "./components/placeholder/placeholder";
import Section from "./components/section/section";
import { sectionData } from "./data/section-data";
import FooterBanner from "./components/footer-banner/footerBanner";

export default function Home() {
  return(
    <div className="page">
        <Navbar/>
        <div className="page-container">
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
        </div>
    </div>
  );
}
