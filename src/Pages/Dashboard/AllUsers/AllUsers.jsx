import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { MdDeleteForever } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  // console.log(users);

  const handleDeleteUser = (user) => {
    // console.log(user)

    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this user!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          console.log(res);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your user deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };


  const handleMakeAdmin =user=>{
    // console.log(user)
    axiosSecure.patch(`/users/admin/${user._id}`)
    .then(res=>{
      console.log(res.data)
      if(res.data.modifiedCount>0){
        refetch()
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${user.name} is admin now`,
          showConfirmButton: false,
          timer: 1500
        });

      }
    })

  }

  return (
    <div>
      <Helmet>
        <title>Bistro || All Users</title>
      </Helmet>

      <div className="mt-10">
        <SectionTitle
          subHeading="How many?"
          heading="Manage all users"
        ></SectionTitle>
      </div>

      <div className="bg-white p-10">
        <h1 className="mt-4 uppercase primaryFont font-bold lg:text-4xl sm:text-xl mb-4">
          total users: {users.length}
        </h1>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="primaryFont uppercase text-white bg-[#D1A054] font-bold">
                <th>Serial</th>
                <th>Name</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>

                  <td>{user.name}</td>
                  <td>
                    { user.role === "admin"? "Admin":
                      <button onClick={()=>handleMakeAdmin(user)}>
                      {" "}
                      <FaUsers className="w-[50px] h-[50px] p-1 bg-[#D1A054] rounded text-white"></FaUsers>{" "}
                    </button>
                    }
                  </td>
                  <th>
                    <button onClick={() => handleDeleteUser(user)}>
                      {" "}
                      <MdDeleteForever className=" bg-[#B91C1C] w-[40px] hover:bg-[#b91c1cc2] cursor-pointer h-[40px] px-1 py-1 rounded-md text-white" />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
