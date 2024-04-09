import {Outlet} from "react-router-dom"
import Navigation from "../Components/Nav/Navigation";

const Layout = () => {
    return (
        <>
            <div>
                <Navigation />
                <Outlet />
            </div>
        </>
    );
};

export default Layout;