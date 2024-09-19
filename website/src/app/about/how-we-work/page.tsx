import colors from "@/app/styles/colors";
import Navbar from "@/app/components/navbar/navbar";
import Placeholder from "@/app/components/placeholder/placeholder";

export default function HowWeWork() {
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
                <Placeholder label="How We Work"/>
            </div>
        </div>
    );
}