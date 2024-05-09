


const MenuItem = ({item}) => {
    const {name,image,price,recipe}=item;
    return (
        
       <section className="flex space-x-2 py-4 px-1">
        <img className="w-[200px]" style={{borderRadius: "0 200px 200px 200px"}}  src={image} alt="" />
        <div>
            <h3 className="sm:text-1xl md:text-2xl fontPrimary">{name}</h3>
            <h4>{recipe}</h4>
        </div>

        <p className="text-orange-500 fontPrimary">${price}</p>

        </section>
    );
};

export default MenuItem;