import { useContext } from "react";
import { ProductContext } from "../../provider/ProductProvider";
import FeedbackCard from "./FeedbackCard";
import DashboardBanner from "../Dashboard/DashboardBanner/DashboardBanner";
import { Helmet } from "react-helmet-async";

const Feedback = () => {
    const { feedback } = useContext(ProductContext);
    // console.log(feedback);

    return (
        <div className="">
            <Helmet>
                <title>Feedback | Gadget Heaven</title>
            </Helmet>
            <DashboardBanner
                title={'Users Feedback'}
                subTitle='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'
                des='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'
            ></DashboardBanner>
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
                {
                    feedback.map(feed => <FeedbackCard
                        key={feed.id}
                        feed={feed}
                    ></FeedbackCard>)
                }
            </div>
        </div>
    );
};

export default Feedback;