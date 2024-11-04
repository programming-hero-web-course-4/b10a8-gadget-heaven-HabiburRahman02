
const FeedbackCard = ({ feed }) => {
    const { name, profile_image, rating, comment, date } = feed;
    return (
        <div>
            <div className="card h-full bg-base-100 shadow-xl rounded-xl">
                <figure className="mt-4 ">
                    <div className="relative">
                        <img
                            className="h-32 w-32 rounded-full object-cover"
                            src={profile_image}
                            alt="Shoes" />
                        <div className="">
                            <p className="absolute flex items-center justify-center top-0 right-0 bg-[#9538E2] text-white rounded-full h-8 w-8">{rating}</p>
                        </div>
                    </div>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{comment}</p>
                    <div className="card-actions font-medium justify-between">
                        <p >Date: {date}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedbackCard;