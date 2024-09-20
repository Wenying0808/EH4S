import Navbar from "../components/navbar/navbar";
import Placeholder from "../components/placeholder/placeholder";
import Footer from "@/app/components/footer/footer";

export default function Newsletter() {
  return(
    <div className="page">
      <Navbar/>
      <div className="page-container">
          <div className="page-container-wip">
              <Placeholder label="Newsletter"/>
          </div>
          <Footer/>
      </div>
    </div>
  );
}