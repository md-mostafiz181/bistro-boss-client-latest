import { FaEdit } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import { MdDeleteForever } from "react-icons/md";

const ManageItems = () => {
  const [menu] = useMenu();
  console.log(menu);

  const handleDeleteItem=(item)=>{
    console.log(item)
  }
  return (
    <div >
      <section className="mt-5">
        <SectionTitle
          subHeading="Hurry Up"
          heading="Manage all items"
        ></SectionTitle>
      </section>

      

      <div className="bg-white p-5">

      <div className="primaryFont lg:text-2xl sm:text-xl font-bold uppercase mb-2"> Total  Item: {menu.length}</div> 


        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="font-bold uppercase primaryFont text-white bg-[#D1A054]">
              <tr>
                <th>#</th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={item.image} alt="item-image" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td> ${item.price} </td>

                  <td>
                    <button>
                      <FaEdit className="w-[30px] h-[30px] p-2  bg-[#D1A054] hover:bg-[#d19f54af] rounded text-white"></FaEdit>
                    </button>
                  </td>
                  <th>
                    <button onClick={()=> handleDeleteItem(item)}>
                      <MdDeleteForever className=" bg-[#B91C1C] w-[40px] hover:bg-[#b91c1cc2] cursor-pointer h-[40px] px-1 py-1 rounded-md text-white" />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
            {/* foot */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
