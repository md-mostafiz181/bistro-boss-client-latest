import { Link, Outlet } from "react-router-dom";
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
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}

        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
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
        <ul className="menu p-4 w-60 min-h-full bg-orange-300 text-base-content">

            <h1 className="text-3xl text-center primaryFont font-bold uppercase mt-4">Bistro Boss</h1>
            <p className="text-xl uppercase primaryFont font-normal text-center mt-2 tracking-widest">Restaurant</p>
          {/* Sidebar content here */}
          <div>
            <li className="my-2 primaryFont uppercase font-bold  hover:text-white">
              <Link>
                <FaHome></FaHome> <a> User Home</a>
              </Link>
            </li>
            <li className="my-2 primaryFont uppercase font-bold hover:text-white">
              <Link to="/dashboard/reservation">
                <FaCalendar></FaCalendar> <a>Reservation</a>
              </Link>
            </li>
            <li className="my-2 primaryFont uppercase font-bold hover:text-white">
              <Link to="/dashboard/cart">
                <FaCartArrowDown></FaCartArrowDown> <a>My Cart</a>
              </Link>
            </li>
            <li className="my-2 primaryFont uppercase font-bold  hover:text-white">
              <Link to="/dashboard/review">
                {" "}
                <FaStreetView></FaStreetView> <a>Add Review</a>
              </Link>
            </li>
            <li className="my-2 primaryFont uppercase font-bold hover:text-white">
              <Link to="/dashboard/bookings">
                <FaCalendar></FaCalendar> <a>My Bookings</a>
              </Link>
            </li>

            <hr></hr>

            <li className="my-2 primaryFont uppercase font-bold  hover:text-white">
              <Link to="/">
                <FaHome></FaHome>
                <a>Home</a>
              </Link>
            </li>

            <li className="my-2 primaryFont uppercase font-bold  hover:text-white">
              <Link to="/menu">
                {" "}
                <FaBars></FaBars> <a>Menu</a>
              </Link>
            </li>

            <li className="my-2 primaryFont uppercase font-bold  hover:text-white">
              <Link to="/order/salad">
                {" "}
                <FaCartShopping></FaCartShopping> <a>Shop</a>
              </Link>
            </li>

            <li className="my-2 primaryFont uppercase font-bold  hover:text-white ">
              <Link>
                {" "}
                <FaSellcast></FaSellcast> <a> Contact</a>
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
