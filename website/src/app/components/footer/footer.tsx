import React from "react";
import "./footer.css";
import { sitemapData } from "@/app/data/sitemap-data";
import SitemapColumn from "../sitemap/sitemap";
import CustomIconButton from "../icon-button/iconButton";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import BusinessIcon from '@mui/icons-material/Business';
import XIcon from '@mui/icons-material/X';

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-sitemap">
                {sitemapData.map((column, index) => (
                    <SitemapColumn
                        key={index}
                        header={column.header}
                        tabs={column.tabs}
                    />
                ))}
            </div>
          <div className="footer-social-buttons">
            <CustomIconButton label="Linkdein" icon={LinkedInIcon} href="https://www.linkedin.com/company/hybrid-core/"/>
            <CustomIconButton label="Twitter" icon={XIcon} href="https://x.com/HybridCore1/status/1759520365917724945"/>
            <CustomIconButton label="HybridCore Website" icon={BusinessIcon} href="https://hybridcore.eu/"/>
          </div>
          <div className="footer-rights">©  The EuroHub4Sino project. All rights reserved. </div>
        </div>
    );
}