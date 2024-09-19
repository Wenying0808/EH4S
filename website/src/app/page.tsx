"use client";

import Navbar from "./components/navbar/navbar";
import colors from "./styles/colors";
import Placeholder from "./components/placeholder/placeholder";

export default function Home() {
  return(
    <div
        style={{ 
            margin: 0,
            padding: 0,
            height: "100vh",
            overflow: 'hidden'
        }}
    >
        <Navbar/>
        <div className="page-container"
            style={{
                position: "absolute",
                top: "80px",
                height: "calc(100vh - 80px)",
                width: "100vw",
                backgroundColor: colors.white,

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Placeholder label="Home"/>
        </div>
    </div>
  );
}
