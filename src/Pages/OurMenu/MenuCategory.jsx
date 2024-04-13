import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";




const MenuCategory = ({ items, title, img }) => {

    return (
        <>
            <div className="py-10">
                {title && <Cover image={img} title={title}></Cover>}
                <div className="grid md:grid-cols-2 gap-10">
                    {
                        items.map(item => <MenuItem
                            key={item._id}
                            item={item}
                        ></MenuItem>)
                    }
                </div>
                <Link to={`/order/${title}`}>
                    <div className="text-center">
                        <button className="btn btn-outline my-5 border-0 border-b-2 text-white">Order your Favorite food</button>
                    </div>
                </Link>

            </div>
        </>
    );
};

export default MenuCategory;