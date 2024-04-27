import { FaAd, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUtensils,  } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import UseCarts from "../Hooks/UseCarts";
import { FaBookBookmark, FaUsers } from "react-icons/fa6";


const Dashboard = () => {
    const [cart] = UseCarts()

    const isAdmin = true

    return (
        <div className="flex text-black ">
            {/* dashboard Side bar */}
            <div className="w-64 min-h-screen bg-orange-400 ">
                <div className="ml-8 mt-10">
                <h3 className="text-3xl">BISTRO BOSS</h3>
                <h3 className="text-2xl tracking-widest">Restaurant</h3>
                </div>
                <ul className="menu p-4">
                    {
                        isAdmin ? <>
                        <li><NavLink to="/dashboard/AdminHome"><FaHome></FaHome>ADMIN HOME</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/reservation"><FaUtensils></FaUtensils> ADD ITEMS</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/cart"><FaList></FaList>MANAGE ITEMS</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/review"><FaBookBookmark></FaBookBookmark>MANAGE BOOKINGS</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/users"><FaUsers></FaUsers>ALL USERS</NavLink>
                    </li>
                        </>
                            :
                            <>
                                <li><NavLink to="/dashboard/userHome"><FaHome></FaHome>User Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/reservation"><FaCalendar></FaCalendar>Reservation</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/cart"><FaShoppingCart></FaShoppingCart>My Cart({cart.length})</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/review"><FaAd></FaAd>Add a Review</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/bookings"><FaList></FaList>My Bookings</NavLink>
                                </li>
                            </>
                    }
                    {/* shared nav links */}
                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome>Home</NavLink>
                    </li>
                    <li><NavLink to="/order/salad"><FaSearch></FaSearch>Menu</NavLink>
                    </li>
                    <li><NavLink to="/order/salad"><FaEnvelope></FaEnvelope> Contact</NavLink>
                    </li>

                </ul>
            </div>
            {/* Dashboard content */}
            <div className="flex-1 p-8 bg-white">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;