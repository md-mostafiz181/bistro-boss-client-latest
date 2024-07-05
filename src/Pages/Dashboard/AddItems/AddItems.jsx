import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure"
import Swal from "sweetalert2";

const image_hosting_key= import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api=`https://api.imgbb.com/1/upload?key=${image_hosting_key}`
console.log(image_hosting_key)


const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();

  const axiosPublic=useAxiosPublic();
  const axiosSecure=useAxiosSecure()

  const onSubmit = async(data) => {
    const imageFile={ image: data.image[0] }
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
        headers:{
            "Content-Type":"multipart/form-data"
        }
        
    })
    if(res.data.success){
      const menuItem={
        name:data.name,
        category:data.category,
        price:parseFloat(data.price),
        recipe:data.recipe,
        image:res.data.data.display_url
      }

      const menuRes= await axiosSecure.post("/menu", menuItem);
      console.log(menuRes.data)
      if(menuRes.data.insertedId){
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is added successfully`,
          showConfirmButton: false,
          timer: 1500
        });
      }

    }
    console.log(res.data)
  };
  return (
    <div className="mt-10">

        <Helmet
        title="Bistro || Add Item"
        ></Helmet>
      <SectionTitle
        subHeading="What's new"
        heading="add an item"
      ></SectionTitle>

      <div className="px-10">
        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="my-6">
            <label className="form-control w-full ">
              <div className="label primaryFont lg:text-1xl sm:text-xl font-bold">
                <span className="label-text">Recipe Name *</span>
              </div>
              <input
                {...register("name", {required:true})}
                type="text"
                placeholder="Recipe Name"
                className="input input-bordered w-full "
              />
            </label>
          </div>

          <div className="flex gap-6 my-6">
            {/* category */}

            <label className="form-control w-full ">
              <div className="label primaryFont lg:text-1xl sm:text-xl font-bold">
                <span className="label-text">Category*</span>
              </div>
              <select defaultValue="default"
                {...register("category", {required:true})}
                className="select select-bordered"
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drink">Drinks</option>
              </select>
            </label>

            {/* price */}

            <label className="form-control w-full ">
              <div className="label primaryFont lg:text-1xl sm:text-xl font-bold">
                <span className="label-text">Price *</span>
              </div>
              <input
                {...register("price", {required:true})}
                type="number"
                placeholder="Price"
                className="input input-bordered w-full "
              />
            </label>
          </div>

        <div>
            <label className="form-control">
              <div className="label primaryFont lg:text-1xl sm:text-xl font-bold">
                <span className="label-text">Recipe Details*</span>
              
              </div>
              <textarea
              {...register("recipe", {required:true})}
                className="textarea textarea-bordered h-24"
                placeholder="Recipe Details"
              ></textarea>

            </label>
        </div>

        <div className="my-6">
           <input
           {...register("image", {required:true})}
            type="file" className="file-input  w-full max-w-xs" />
        </div>

          <button className=" uppercase text-1xl cart-btn primaryFont font-bold  text-orange-400">
            add item 
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
