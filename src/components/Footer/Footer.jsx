
const Footer = () => {
    return (
        <div className=" ">
            <div className="mt-[320px] bg-white text-black py-24">
                <div className="">
                    <div className="max-w-[1450px] mx-auto text-center">
                        <div className="space-y-4">
                            <h2 className="text-4xl font-bold">Gadget Heaven</h2>
                            <p className="text-gray-500 pb-4">Leading the way in cutting-edge technology and innovation.</p>
                            <div className="border-t  p-4"></div>
                        </div>
                    </div>
                    <footer className="footer max-w-[950px] mx-auto  md:flex justify-around ">
                        <nav>
                            <h6 className="footer-title">Services</h6>
                            <a className="link link-hover font-semibold text-gray-500">Product Support</a>
                            <a className="link link-hover font-semibold text-gray-500">Order Tracking</a>
                            <a className="link link-hover font-semibold text-gray-500">Shopping & Delivery</a>
                            <a className="link link-hover font-semibold text-gray-500">Returns</a>
                        </nav>
                        <nav>
                            <h6 className="footer-title">Company</h6>
                            <a className="link link-hover font-semibold text-gray-500">About Us</a>
                            <a className="link link-hover font-semibold text-gray-500">Careers</a>
                            <a className="link link-hover font-semibold text-gray-500">Contact</a>
                        </nav>
                        <nav>
                            <h6 className="footer-title">Legal</h6>
                            <a className="link link-hover font-semibold text-gray-500">Terms of Services</a>
                            <a className="link link-hover font-semibold text-gray-500">Privacy Policy</a>
                            <a className="link link-hover font-semibold text-gray-500">Cookie Policy</a>
                        </nav>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default Footer;