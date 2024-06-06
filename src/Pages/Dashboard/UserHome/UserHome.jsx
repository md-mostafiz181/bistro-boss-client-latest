import { FaCalendar, FaCartArrowDown, FaMoneyBill, FaStar } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import useCart from "../../../hooks/useCart";
import useMenu from "../../../hooks/useMenu";




const UserHome = () => {

    const {user}=useAuth();
    const [cart]=useCart();
    const [menu]=useMenu();
    
    
   
    
    
    return (
        <div className="pb-[200px]">
            <h1 className="text-4xl font-bold  primaryFont py-5 px-5 capitalize">Hi, Welcome Back!!!</h1>
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-3 px-5 h-[200px] mb-3">
                <div className="lg:w-full flex justify-center items-center   bg-[#bb34f5b1] rounded-md">
                    <h1 className="lg:text-5xl font-bold uppercase text-white sm:text-xl primaryFont py-5">{menu.length} Menu</h1>
                </div>


                <div className="lg:w-full flex justify-center items-center  bg-[#d3a156ad] rounded-md">
                    <h1 className="lg:text-5xl font-bold uppercase text-white sm:text-xl primaryFont py-5">Shop</h1>
                </div>
                <div className="lg:w-full flex justify-center items-center  bg-[#fe487faa] rounded-md ">
                    <h1 className="lg:text-5xl  font-bold uppercase text-white sm:text-xl  primaryFont py-5">Contact</h1>
                </div>
            </div>

            <div className="py-5 px-5 h-[400px] grid lg:grid-cols-2 sm:grid-cols-1 gap-3 mt-6">
                <div className="bg-[#006989] lg:w-full  rounded-md ">
                   
                    <div className="flex justify-center items-center mt-2">
                        <div className="image-box w-[300px] h-[300px] bg-white  rounded-full border-2 border-x-white hover:border-x-orange-400 border-y-white hover:border-y-orange-400">
                          
                          <img className="w-full h-full rounded-full" src={user?.photoURL} alt="photo" />
                        </div>
                    </div>

                    <div className="flex justify-center items-center">
                        <h1 className="uppercase primaryFont text-white text-2xl primaryFont">{user?.displayName}</h1>
                    </div>
                </div>
                <div className="bg-[#F6DCAC]  lg:w-full   rounded-md">
                    <h1 className="text-3xl text-center pt-4 font-bold uppercase primaryFont">Your Activities</h1>
                    <div className="flex ">

                        <div ><FaCartArrowDown className="w-[50px] h-[20px] mt-2 text-blue-500"></FaCartArrowDown></div>
                        <div><p className="uppercase primaryFont text-2xl sm:text-xl  mt-1 text-blue-500">Orders: {cart.length} </p></div>
                    </div>
                    <div className="flex ">

                        <div ><FaStar className="w-[50px] h-[20px] mt-2 text-green-500"></FaStar></div>
                        <div><p className="uppercase primaryFont text-2xl sm:text-xl  mt-1 text-green-500">Reviews: </p></div>
                    </div>
                    <div className="flex ">

                        <div ><FaCalendar className="w-[50px] h-[20px] mt-2 text-yellow-500"></FaCalendar></div>
                        <div><p className="uppercase primaryFont text-2xl sm:text-xl  mt-1 text-yellow-500">Bookings: </p></div>
                    </div>
                    <div className="flex ">

                        <div ><FaMoneyBill className="w-[50px] h-[20px] mt-2 text-orange-500"></FaMoneyBill></div>
                        <div><p className="uppercase primaryFont text-2xl sm:text-xl  mt-1 text-orange-500">Payments: </p></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserHome;