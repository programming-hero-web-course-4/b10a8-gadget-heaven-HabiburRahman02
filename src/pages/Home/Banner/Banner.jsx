import bannerImg from '../../../assets/banner.jpg'
const Banner = () => {
    return (
        <div className="bg-custom mb-[320px] py-12 rounded-3xl h-screen">
            <div className="max-w-[820px] mx-auto text-center relative">
                <div className="space-y-8 pb-56">
                    <h1 className="text-5xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    <button className="bg-white text-black font-semibold rounded-full px-6 py-3 hover:bg-base-200">Shop Now</button>
                </div>
                <div className='absolute top-96 md:top-80 border border-white p-4 rounded-3xl'>
                    <img className='h-[560px] rounded-3xl ' src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;