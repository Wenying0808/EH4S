import Navbar from "../components/navbar/navbar";
import Placeholder from "../components/placeholder/placeholder";
import Footer from "@/app/components/footer/footer";

export default function Contact() {
  return(
    <div className="page">
      <Navbar/>
      <div className="page-container">
          <div className="page-container-wip">
              <Placeholder label="Contact"/>
          </div>
          <Footer/>
      </div>
    </div>
  );
}