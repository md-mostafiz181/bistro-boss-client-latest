import { Link } from "react-router-dom";
import Container from "../../../../components/Container/Container";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .then((error) => {
        console.log(error);
      });
  };
  const navOptions = (
    <>
      <li className="uppercase text-1xl">
        <Link to="/">Home</Link>
      </li>
      <li className="uppercase text-1xl">
        <Link to="/menu">Menu</Link>
      </li>
      <li>
        <Link className="uppercase text-1xl" to="order/salad">
          Order Shop
        </Link>
      </li>
      <li>
        <Link className="uppercase text-1xl" to="secret">
          Secret
        </Link>
      </li>

      <li>
        <Link>
        <button className="btn">
          <FaShoppingCart></FaShoppingCart>
          <div className="badge badge-secondary">+0</div>
        </button>
        </Link>
      </li>

      <div >
        {user ? (
          <>

            {/* <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={photourl} />
              </div>
            </div> */}
            {/* <span>{user ?. displayName}</span> */}

            <button onClick={handleLogOut} className="btn uppercase text-1xl">
              LogOut
            </button>
          </>
        ) : (
          <>
            <li>
              <Link className="btn uppercase text-1xl hover:text-white" to="login">
                Login
              </Link>
            </li>
          </>
        )}
      </div>
    </>
  );
  return (
    <div id="navbar-part">
      <Container>
        <div className="navbar z-10">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52"
              >
                {navOptions}
              </ul>
            </div>
            <a className=" text-xl primaryFont">Bistro Boss</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navOptions}</ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
