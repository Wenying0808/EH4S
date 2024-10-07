import Navbar from "@/app/components/navbar/navbar";
import SectionPageIntro from "@/app/components/section-page-intro/sectionPageIntro";
import Placeholder from "@/app/components/placeholder/placeholder";
import Footer from "@/app/components/footer/footer";

export default function Secret() {
  return(
    <div className="page">
      <Navbar/>
      <div className="page-container">
        <SectionPageIntro title="Secret" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."/>
          <div className="page-container-wip">
                <Placeholder label="Welcome to the Authenticated Secret Page!"/>
          </div>
          <Footer/>
      </div>
    </div>
  );
}