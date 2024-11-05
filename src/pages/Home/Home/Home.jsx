import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import HomeContainer from "../HomeContainer/HomeContainer";

const Home = () => {
    return (
        <div className="text-white">
            <Helmet>
                <title>Home | Gadget Heaven</title>
            </Helmet>
            <Banner></Banner>
            <HomeContainer></HomeContainer>
        </div>
    );
};

export default Home;