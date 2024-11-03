import { useEffect, useState } from "react";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <div className="bg-white p-6 rounded-xl  space-y-4">
                {
                    categories.map(category => <div key={category.id}>
                        <button className="bg-base-200 w-full hover:bg-[#9538E2] hover:text-white font-semibold rounded-full px-6 py-3">{category.name}</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;