import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from "../../assets/menu/menu-bg.jpg"
import dessertImg from "../../assets/menu/dessert-bg.jpeg"
import saladImg from "../../assets/menu/salad-bg.jpg"
import pizzaImg from "../../assets/menu/pizza-bg.jpg"
import soupImg from "../../assets/menu/soup-bg.jpg"
import drinkImg from "../../assets/menu/drinks.jpg"
import Container from "../../components/Container/Container";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useMenu from "../../hooks/useMenu";
import MenuCategory from "./MenuCategory/MenuCategory";
import  "./Menu.css"
// import { Link } from "react-router-dom";

const Menu = () => {
    const [menu]=useMenu();
    const offered=menu.filter(item=>item.category === "offered")
    const dessert=menu.filter(item=>item.category === "dessert")
    const salad=menu.filter(item=>item.category === "salad")
    const pizza=menu.filter(item=>item.category === "pizza")
    const soup=menu.filter(item=>item.category === "soup")
    const drinks=menu.filter(item=>item.category === "drinks")
  return (
    <div >
      <Helmet>
        <title>Bistro || Menu</title>
      </Helmet>
      <Cover img={menuImg} title="Our Menu" text="Would you like to our dish?" ></Cover>
     <Container >
            <section className="py-5">
                <SectionTitle
                    subHeading="Don't miss"
                    heading="Today's offer"
                ></SectionTitle>
        
            </section>
            <MenuCategory items={offered}></MenuCategory>
        </Container>
        <MenuCategory items={dessert} title={"dessert"} img={dessertImg}></MenuCategory>
        <MenuCategory items={salad} title={"salad"} img={saladImg}></MenuCategory>
        <MenuCategory  items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>
        <MenuCategory  items={soup} title={"soup"} img={soupImg}></MenuCategory>
        <MenuCategory items={drinks} title={"drinks"} img={drinkImg}></MenuCategory>
    </div>


  );
};

export default Menu;
