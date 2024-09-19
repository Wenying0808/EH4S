"use client";

import Navbar from "./components/navbar/navbar";
import Placeholder from "./components/placeholder/placeholder";

export default function Home() {
  return(
    <div className="page">
        <Navbar/>
        <div className="page-container">
            <Placeholder label="Home"/>
        </div>
    </div>
  );
}
