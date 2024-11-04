
const DashboardBanner = ({ title, subTitle }) => {
    return (
        <div className="bg-[#9538E2]">
            <div className=" max-w-[1400px] p-8 mx-auto text-center text-white">
                <h2 className="text-3xl font-bold mb-4 ">{title}</h2>
                <p className="max-w-[700px] mx-auto">{subTitle}</p>
                <div className="max-w-72 mx-auto">
                    <div className="flex gap-2">
                        <button className="mt-8 bg-white text-black font-semibold rounded-full px-12 py-3 hover:bg-base-200">Cart</button>
                        <button className="mt-8 border-white text-white hover:text-black border-2 font-semibold rounded-full px-12 py-3 hover:bg-base-200">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardBanner;