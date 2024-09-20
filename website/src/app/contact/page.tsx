import Navbar from "../components/navbar/navbar";
import SectionPageIntro from "../components/section-page-intro/sectionPageIntro";
import Placeholder from "../components/placeholder/placeholder";
import Footer from "@/app/components/footer/footer";

export default function Contact() {
  return(
    <div className="page">
      <Navbar/>
      <div className="page-container">
        <SectionPageIntro title="Contact" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."/>
        <div className="page-container-wip">
            <Placeholder label="Contact"/>
        </div>
        <Footer/>
      </div>
    </div>
  );
}