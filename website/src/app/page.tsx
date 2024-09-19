"use client";

import Navbar from "./components/navbar/navbar";
import colors from "./styles/colors";

export default function Home() {
  return (
    <div className="Home" 
      style={{ 
        backgroundColor: colors.calypso,
        margin: 0,
        padding: 0,
        height: "100vh",
      }}
    >
      <Navbar/>
      Container
    </div>
  );
}
