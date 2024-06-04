
import "./FoodCard.css"
import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";


const FoodCard = ({item}) => {
    const {name, recipe,price, image, _id}=item
    const navigate=useNavigate()
    const location=useLocation();
    const axiosSecure=useAxiosSecure()
    

    const {user}=useAuth()

    const handleAddToCart= (food)=>{
      console.log(food)

      if(user && user.email){
        // TODO: sent item to the database
        console.log(user.email,food)
        const cartItem={
          menuId:_id,
          email:user.email,
          name,
          image,
          price,
        }

        axiosSecure.post("/carts", cartItem)
        .then(res=>{
          console.log(res.data)
          if(res.data.insertedId){
            Swal.fire({
              position: "center",
              icon: "success",
              title: `${name} successfully added to the cart`,
              showConfirmButton: false,
              timer: 1500
            });
          }
        })


        
      }else{
        Swal.fire({
          title: "You are not login",
          text: "Please login to add to cart!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, login!"
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/login", {state:{from:location}} )
          }
        });
      }
      

    }
    return (
        
        <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img className="w-full" src={image} alt="Shoes" />
         
        </figure>
        <p className="price fontPrimary">${price}</p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          
          <div className="card-actions justify-center">
            <button
              onClick={()=>handleAddToCart(item)}
             className="cart-btn fontPrimary font-bold  uppercase text-orange-400">

              Add to Cart
            </button>
          </div>
        </div>
      </div>

    );
};

export default FoodCard;