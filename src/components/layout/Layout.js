import Footer from "../navigation/Footer";
import Navbar from "../navigation/Navbar";

const Layout = ({children}) => {
    return (
        <div>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
