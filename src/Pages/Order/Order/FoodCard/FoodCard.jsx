
import "./FoodCard.css"
import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const FoodCard = ({item}) => {
    const {name, recipe,price, image}=item
    const navigate=useNavigate()

    const {user}=useAuth()

    const handleAddToCart= (food)=>{
      console.log(food , user.email)

      if(user && user.email){
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
            navigate("/login")
          }
        });
      }else{
        console.log("at first login yourself")
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