
const DashboardBanner = ({ title, subTitle }) => {

    return (
        <div className="bg-[#9538E2]">
            <div className=" max-w-[1400px] p-8 pb-0 mx-auto text-center text-white">
                <h2 className="text-3xl font-bold mb-4 ">{title}</h2>
                <p className="max-w-[700px] mx-auto">{subTitle}</p>
                <div className="max-w-72 mx-auto">

                </div>
            </div>
        </div>
    );
};

export default DashboardBanner;