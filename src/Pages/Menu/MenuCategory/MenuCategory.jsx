
import { Link } from "react-router-dom";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import "./MenuCategory.css"
import Cover from "../../Shared/Cover/Cover";
import Container from "../../../components/Container/Container";
// import Cover from "../../Shared/Cover/Cover";


const MenuCategory = ({items,title, img}) => {
    console.log(title)
    return (
        
        <div >
            

         { title && <Cover img={img} title={title} text="Would you like to our dish?" ></Cover>}
        
            <Container>
            <div className="grid md:grid-cols-2 gap-2 mt-2">
            { 
            items.map(item => <MenuItem
            key={item._id}
            item={item}
            ></MenuItem>)
           }
          </div>
            </Container>


            <div className="flex justify-center items-center">
            <Link to={`/order/${title}`}> 
            
            <button className="cart-btn uppercase fontPrimary text-center">Order your favorite food</button></Link>
            </div>

       
    </div>
    );
};

export default MenuCategory;