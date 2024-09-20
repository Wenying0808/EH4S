import React from "react";
import "./footerBanner.css";
import colors from "@/app/styles/colors";
import Image from "next/image";
import bannerImg from "./img_footer-banner.png"

export default function FooterBanner() {
    return (
        <div className="footer-banner">
            <Image src={bannerImg} alt="footer img" width={159} height={161}/>
            <div className="footer-banner-description">
                <span className="footer-banner-description-text">
                    The project “European Hub for Contemporary China (EuroHub4Sino)” has received funding from the European Union’s Horizon Europe research and innovation programme under grant agreement number 101131737.
                </span>
                <span className="footer-banner-description-text">
                    “Funded by the European Union. Views and opinions expressed are however those of the author(s) only and do not necessarily reflect those of the European Union or European Research Executive Agency (REA). Neither the European Union nor the granting authority can be held responsible for them.”   
                </span>
            </div>
        </div>
    );
};