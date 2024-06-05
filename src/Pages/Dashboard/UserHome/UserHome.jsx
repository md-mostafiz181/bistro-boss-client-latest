

const UserHome = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold  primaryFont py-5 px-5 capitalize">Hi, Welcome Back!!!</h1>
            <div className="grid grid-cols-3 gap-3 px-5 h-[200px]">
                <div className="lg:w-full    bg-[#bb34f5b1] rounded-md">
                    <h1 className="text-center text-2xl primaryFont py-5">Menu</h1>
                </div>


                <div className="lg:w-full  bg-[#d3a156ad] rounded-md">
                    <h1 className="text-center text-2xl primaryFont py-5">Shop</h1>
                </div>
                <div className="lg:w-full  bg-[#fe487faa] rounded-md">
                    <h1 className="text-center text-2xl primaryFont py-5">Contact</h1>
                </div>
            </div>

            <div className="py-5 px-5 h-[400px] grid grid-cols-2 gap-3">
                <div className="bg-green-500 lg:w-full  rounded-md ">
                    <h1>User Image and Name</h1>
                </div>
                <div className="bg-red-500 lg:w-full  rounded-md">Order details</div>
            </div>
        </div>
    );
};

export default UserHome;