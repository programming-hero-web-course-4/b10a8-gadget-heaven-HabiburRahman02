import { useContext } from "react";
import { ProductContext } from "../../../../provider/ProductProvider";
import { NavLink } from "react-router-dom";


const LeftSideNav = () => {
    const { categories } = useContext(ProductContext);
    // console.log(categories);
    return (
        <div>
            <div className="bg-white p-6 rounded-xl shadow-xl  space-y-4">
                {
                    categories.map(category => <div key={category.id}>
                        <NavLink className={({ isActive }) => ` ${isActive && 'text-[#a538ff] '}`} to={`/category/${category.category}`}>
                            <button className="bg-base-200 w-full hover:bg-[#9538E2] hover:text-white font-semibold rounded-full px-6 py-3">{category.category}</button>
                        </NavLink>
                    </div>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;