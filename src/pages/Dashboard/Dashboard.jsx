import Carts from "./Carts/Carts";
import DashboardBanner from "./DashboardBanner/DashboardBanner";

const Dashboard = () => {
    return (
        <div>
            <DashboardBanner title='Dashboard Details'
                subTitle='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'
            ></DashboardBanner>
            <div className="max-w-[1400px] mx-auto mt-8">
                <Carts></Carts>
            </div>
        </div>
    );
};

export default Dashboard;