import Navbar from "@/app/components/navbar/navbar";
import Placeholder from "@/app/components/placeholder/placeholder";

export default function WhatWeDo() {
    return(
        <div className="page">
            <Navbar/>
            <div className="page-container">
                <Placeholder label="What We Do"/>
            </div>
        </div>
    );
}