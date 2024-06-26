import "./SingleChef.css"

const SingleChef = ({ s }) => {
  const { image, name, recipe,price } = s;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img className="w-full" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <p>$ {price}</p>
        <div className="card-actions justify-center">
          <button className="cart-btn primaryFont font-bold  uppercase text-orange-400">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleChef;
