import {Outlet} from "react-router-dom";
import Navbar from "@/components/Navbar.tsx";
import Footer from "@/components/Footer.tsx";

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen relative">
            {/*<Sonner/>*/}
            <Navbar/>
            <main className="flex-1 relative z-10">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;