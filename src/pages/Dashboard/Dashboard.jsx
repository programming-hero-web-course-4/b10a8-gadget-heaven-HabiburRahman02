import Carts from "./Carts/Carts";
import DashboardBanner from "./DashboardBanner/DashboardBanner";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
import Lists from "./DashboardBanner/Lists/Lists";
const Dashboard = () => {
    return (
        <div>
            <DashboardBanner title='Dashboard Details'
                subTitle='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'
            ></DashboardBanner>
            <div>
                <Tabs>
                    <TabList className={' bg-[#9538E2] pb-12'}>
                        <div className="flex gap-2 max-w-[300px] mx-auto">
                            <Tab>
                                <button className="mt-8 bg-white text-black font-semibold rounded-full px-12 py-3 hover:bg-base-200">Cart</button>
                            </Tab>
                            <Tab>
                                <button className="mt-8 border-white text-white hover:text-black border-2 font-semibold rounded-full px-12 py-3 hover:bg-base-200">Wishlist</button>
                            </Tab>
                        </div>
                    </TabList>

                    <TabPanel>
                        <Carts></Carts>
                    </TabPanel>
                    <TabPanel>
                        <Lists></Lists>
                    </TabPanel>
                </Tabs>
            </div>
            <div className="max-w-[1400px] mx-auto mt-8">

            </div>
        </div>
    );
};

export default Dashboard;