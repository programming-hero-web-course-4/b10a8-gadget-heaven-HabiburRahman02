
const DashboardBanner = ({ title, subTitle, des }) => {

    return (
        <div className="bg-[#9538E2]">
            <div className=" max-w-[1400px] p-8 mx-auto text-center text-white">
                <h2 className="text-3xl font-bold mb-4 ">{title}</h2>
                <p className="max-w-[700px] mx-auto">{subTitle}</p>
                <p className="-4">{des}</p>
            </div>
        </div>
    );
};

export default DashboardBanner;