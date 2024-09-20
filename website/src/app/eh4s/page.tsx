import Navbar from "../components/navbar/navbar";
import Placeholder from "../components/placeholder/placeholder";
import Footer from "@/app/components/footer/footer";

export default function EH4SPlatform() {
  return(
    <div className="page">
      <Navbar/>
      <div className="page-container">
          <div className="page-container-wip">
              <Placeholder label="EH4SPlatform"/>
          </div>
          <Footer/>
      </div>
    </div>
  );
}