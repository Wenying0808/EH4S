import Navbar from "@/app/components/navbar/navbar";
import Placeholder from "@/app/components/placeholder/placeholder";
import Footer from "@/app/components/footer/footer";

export default function EventsActivities() {
    return(
        <div className="page">
            <Navbar/>
            <div className="page-container">
                <div className="page-container-wip">
                    <Placeholder label="Events & Activities"/>
                </div>
                <Footer/>
            </div>
        </div>
    );
}