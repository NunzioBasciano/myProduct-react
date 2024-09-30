import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import SideMenu from "../components/sideMenu/SideMenu";


function DefaultLayout() {
    return (
        <div>
            <Header />
            <div className="flex">
                <SideMenu />
                <Outlet />
            </div>
        </div>
    )
}

export default DefaultLayout