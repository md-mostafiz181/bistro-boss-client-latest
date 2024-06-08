import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { MdDeleteForever } from "react-icons/md";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  console.log(users);

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
                    <button className="btn btn-primary">Role</button>
                  </td>
                  <th>
                    <button>
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
