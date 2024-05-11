
import MenuItem from "../../Shared/MenuItem/MenuItem";
import "./MenuCategory.css"


const MenuCategory = ({items}) => {
    return (
        
        <div className="grid md:grid-cols-2 gap-2 mt-2">
    
        
        {
            items.map(item => <MenuItem
            key={item._id}
            item={item}
            ></MenuItem>)
        }

       
    </div>
    );
};

export default MenuCategory;