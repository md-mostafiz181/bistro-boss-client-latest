import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";
import { MdDeleteForever } from "react-icons/md";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Cart = () => {

    const [cart,refetch]=useCart();
    const totalPrice=cart.reduce((total,item)=> total+item.price,0)
    const axiosSecure=useAxiosSecure()

    const handleDelete=(id)=>{
        console.log(id)

   
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this item!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

            axiosSecure.delete(`/carts/${id}`)
            .then(res=>{
                console.log(res)
                if(res.data.deletedCount>0){
                    refetch();
                                  Swal.fire({
                                    title: "Deleted!",
                                    text: "Your item deleted.",
                                    icon: "success"
                                });

                }
            })
            }
          });


    }
  return (
    <section>

        <Helmet>
            <title>Bistro || My Cart</title>
        </Helmet>
      <div className="mt-5">
        <SectionTitle
          subHeading="My Cart"
          heading="Wanna add more?"
        ></SectionTitle>
      </div>

      <div className="overflow-x-auto  bg-white">

                <div className="flex justify-between px-5 mt-5 uppercase primaryFont lg:text-2xl sm:text-xl font-bold">
                    <h1>Total Order: {cart.length}</h1>
                    <h1>Total Price: ${totalPrice.toFixed(2)}</h1>
                    <button className="btn mb-2 bg-[#D1A054] uppercase text-white font-bold ">Pay</button>
                </div>
                <table className="table">
                    {/* head */}
                    <thead className="bg-[#D1A054]">
                    <tr className="text-white uppercase primaryFont font-bold">
                        <th>id</th>
                        <th>Item Image</th>
                        <th>Item Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}

                    {
                        cart.map((item,index) =>                      <tr key={item._id}>
                            <th>
                            {index + 1}
                            </th>
                            <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                </div>
                                </div>
    
                            </div>
                            </td>
                            <td>
                            {item.name}
                            <br/>
    
                            </td>
                            <td>${item.price}</td>
                            <th >
                            <button onClick={()=>handleDelete(item._id)}> <MdDeleteForever className=" bg-[#B91C1C] w-[40px] hover:bg-[#b91c1cc2] cursor-pointer h-[40px] px-1 py-1 rounded-md text-white" /></button>
                            </th>
                        </tr>)
                    }


                    </tbody>
                    
                </table>
</div>
    </section>
  );
};

export default Cart;
