import React from "react";
import "./sitemap.css";

interface Tab {
    label: string;
    route: string;
}

interface SitemapColumnProps {
    header: string;
    tabs: Tab[];
}

export default function SitemapColumn ( { header, tabs }: SitemapColumnProps) {
    return (
        <div className="sitemap-column">
          <div className="sitemap-column-header">{header}</div>
          <ul className="sitemap-column-tabs">
            {tabs.map((tab, index) => (
              <li key={index} className="sitemap-column-tab">
                <a 
                    className="sitemap-column-tab-label" 
                    href={tab.route}
                >
                    {tab.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      );
}