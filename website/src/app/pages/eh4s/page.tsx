import Navbar from "@/app/components/navbar/navbar";
import Placeholder from "@/app/components/placeholder/placeholder";
import Footer from "@/app/components/footer/footer";
import SectionPageIntro from "@/app/components/section-page-intro/sectionPageIntro";

export default function EH4SPlatform() {
  return(
    <div className="page">
      <Navbar/>
      <div className="page-container">
        <SectionPageIntro title="EH4SPlatform" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."/>
        <div className="page-container-wip">
            <Placeholder label="EH4SPlatform"/>
        </div>
        <Footer/>
      </div>
    </div>
  );
}