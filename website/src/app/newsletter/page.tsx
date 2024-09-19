import Navbar from "../components/navbar/navbar";
import Placeholder from "../components/placeholder/placeholder";

export default function Newsletter() {
  return(
    <div className="page">
        <Navbar/>
        <div className="page-container">
            <Placeholder label="Newsletter"/>
        </div>
    </div>
  );
}