import AllProducts from "../AllProducts/AllProducts";
import LeftSideNav from "../Home/LeftSideNav/LeftSideNav";

const HomeContainer = () => {
    return (
        <div className="text-black md:flex gap-6">
            <div className="md:w-1/5"><LeftSideNav></LeftSideNav></div>
            <div className="md:w-4/5"><AllProducts></AllProducts></div>
        </div>
    );
};

export default HomeContainer;