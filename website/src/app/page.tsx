"use client";

import Navbar from "./components/navbar/navbar";
import SectionPageIntro from "./components/section-page-intro/sectionPageIntro";
import Section from "./components/section/section";
import { sectionData } from "./data/section-data";
import { Divider } from "@mui/material";
import FooterBanner from "./components/footer-banner/footerBanner";
import Footer from "./components/footer/footer";
import Image from "next/image";
import WWAImg1 from './assets/About-Who-We-Are/section-images/img_WWA-1.png';
import WWAImg2 from './assets/About-Who-We-Are/section-images/img_WWA-2.png';
import WWAImg3 from './assets/About-Who-We-Are/section-images/img_WWA-3.png';
import WWAImg4 from './assets/About-Who-We-Are/section-images/img_WWA-4.png';
import WWAImg5 from './assets/About-Who-We-Are/section-images/img_WWA-5.png';
import WWAImg6 from './assets/About-Who-We-Are/section-images/img_WWA-6.png';
import WWAImg7 from './assets/About-Who-We-Are/section-images/img_WWA-7.png';
import WWAImg8 from './assets/About-Who-We-Are/section-images/img_WWA-8.png';
import WWAImgMap from './assets/About-Who-We-Are/img_WWA-worldmap.png';
import colors from "./styles/colors";

const images = [WWAImg1, WWAImg2, WWAImg3, WWAImg4, WWAImg5, WWAImg6, WWAImg7, WWAImg8];

export default function Home() {
  return(
    <div className="page">
        <Navbar/>
        <div className="page-container">
          <SectionPageIntro title="About us" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."/>
          <div className="section-map">
            <Image src={WWAImgMap} alt="map" width={974} height={455} layout="responsive"/>
          </div>
          <div className="section-consortium-partners">
            <div className="section-title section-title-center">Consortium Partners</div>
            <div className="section-description section-description-center">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo</div>
            <div className="section-consortium-partners-images">
              {images.map((img, index) => (
                <Image key={index} src={img} alt="partner image" width={150} height={75}/>
              ))}
            </div>
          </div>
          <div className="section-divider">
            <hr />
          </div>
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
                image={images[section.imageIndex]}
              />
            ))}
          </div>
          <FooterBanner/>  
          <Footer/>
        </div>
    </div>
  );
}
