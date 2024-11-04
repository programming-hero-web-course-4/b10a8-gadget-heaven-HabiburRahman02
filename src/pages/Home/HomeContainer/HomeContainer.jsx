import { Outlet } from "react-router-dom";
import LeftSideNav from "../Home/LeftSideNav/LeftSideNav";

const HomeContainer = () => {
    return (
        <div className="max-w-[1400px] mx-auto">
            <h3 className="text-4xl font-semibold text-center text-black mb-8">Explore Cutting-Edge Gadgets</h3>
            <div className="text-black md:flex gap-6">
                <div className="md:w-1/5"><LeftSideNav></LeftSideNav></div>
                <div className="md:w-4/5">
                    {/* <AllProducts></AllProducts> */}
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default HomeContainer;