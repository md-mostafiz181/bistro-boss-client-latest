import { NavLink, Outlet } from "react-router-dom";
import {
  FaBars,
  FaCalendar,
  FaCartArrowDown,
  FaHome,
  FaSellcast,
  FaStreetView,
} from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";


const DashboardLayout = () => {
  return (
    <div className="bg-slate-300 min-h-screen flex flex-col">
    
        <div className="drawer lg:drawer-open flex-grow">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col px-1">
            {/* Page content here */}

            <Outlet></Outlet>
            <label
              htmlFor="my-drawer-2"
              className="btn bg-orange-400 text-white  drawer-button lg:hidden "
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-60 min-h-full bg-[#D1A054] text-base-content">
              <h1 className="text-3xl text-center primaryFont font-bold uppercase mt-4">
                Bistro Boss
              </h1>
              <p className="text-xl uppercase primaryFont font-normal text-center mt-2 tracking-widest">
                Restaurant
              </p>
              {/* Sidebar content here */}
              <div>
                <li className="my-2 primaryFont uppercase font-bold  hover:text-white">
                  <NavLink to="/dashboard/userHome">
                    <FaHome></FaHome> <a>User Home</a>
                  </NavLink>
                </li>
                <li className="my-2 primaryFont uppercase font-bold hover:text-white">
                  <NavLink to="/dashboard/reservation">
                    <FaCalendar></FaCalendar> <a>Reservation</a>
                  </NavLink>
                </li>
                <li className="my-2 primaryFont uppercase font-bold hover:text-white">
                  <NavLink to="/dashboard/cart">
                    <FaCartArrowDown></FaCartArrowDown> <a>My Cart</a>
                  </NavLink>
                </li>
                <li className="my-2 primaryFont uppercase font-bold  hover:text-white">
                  <NavLink to="/dashboard/review">
                    {" "}
                    <FaStreetView></FaStreetView> <a>Add Review</a>
                  </NavLink>
                </li>
                <li className="my-2 primaryFont uppercase font-bold hover:text-white">
                  <NavLink to="/dashboard/bookings">
                    <FaCalendar></FaCalendar> <a>My Bookings</a>
                  </NavLink>
                </li>

                <div className="divider"></div>

                <li className="my-2 primaryFont uppercase font-bold  hover:text-white">
                  <NavLink to="/">
                    <FaHome></FaHome>
                    <a>Home</a>
                  </NavLink>
                </li>

                <li className="my-2 primaryFont uppercase font-bold  hover:text-white">
                  <NavLink to="/menu">
                    {" "}
                    <FaBars></FaBars> <a>Menu</a>
                  </NavLink>
                </li>

                <li className="my-2 primaryFont uppercase font-bold  hover:text-white">
                  <NavLink to="/order/salad">
                    {" "}
                    <FaCartShopping></FaCartShopping> <a>Shop</a>
                  </NavLink>
                </li>

                <li className="my-2 primaryFont uppercase font-bold  hover:text-white ">
                  <NavLink to="/contact">
                    {" "}
                    <FaSellcast></FaSellcast> <a> Contact</a>
                  </NavLink>
                </li>
              </div>
            </ul>
          </div>
        </div>

    </div>
  );
};

export default DashboardLayout;
