import FoodCard from "../Order/FoodCard/FoodCard";


const OrderTab = ({items}) => {
    return (
        
        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-2">
        {
            items.map(item => <FoodCard
            key={item._id}
            item={item}
            ></FoodCard>)
        }
    </div>
    );
};

export default OrderTab;