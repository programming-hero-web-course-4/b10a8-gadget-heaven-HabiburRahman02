
const TopBanner = ({ title, subTitle }) => {
    return (
        <div className="bg-[#9538E2]">
            <div className=" max-w-[1400px] space-y-4 p-8 mx-auto text-center text-white pb-60">
                <h2 className="text-3xl font-bold">{title}</h2>
                <p>{subTitle}</p>
            </div>
        </div>
    );
};

export default TopBanner;