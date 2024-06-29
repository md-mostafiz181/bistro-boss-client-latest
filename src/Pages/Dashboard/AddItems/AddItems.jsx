import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="mt-10">
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
              <select
                {...register("category", {required:true})}
                className="select select-bordered"
              >
                <option disabled selected>
                  Select a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drink">Drink</option>
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
