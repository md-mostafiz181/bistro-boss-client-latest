import "./FoodCard.css"

const FoodCard = ({item}) => {
    const {name, recipe,price, image}=item

    const handleAddToCart= (food)=>{
      console.log(food)
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