import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from "../../assets/menu/menu-bg.jpg"
import dessertImg from "../../assets/menu/dessert-bg.jpeg"
import saladImg from "../../assets/menu/salad-bg.jpg"
import pizzaImg from "../../assets/menu/pizza-bg.jpg"
import soupImg from "../../assets/menu/soup-bg.jpg"
import Container from "../../components/Container/Container";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useMenu from "../../hooks/useMenu";
import MenuCategory from "./MenuCategory/MenuCategory";
import  "./Menu.css"

const Menu = () => {
    const [menu]=useMenu();
    const offered=menu.filter(item=>item.category === "offered")
    const dessert=menu.filter(item=>item.category === "dessert")
    const salad=menu.filter(item=>item.category === "salad")
    const pizza=menu.filter(item=>item.category === "pizza")
    const soup=menu.filter(item=>item.category === "soup")
  return (
    <div >
      <Helmet>
        <title>Bistro || Menu</title>
      </Helmet>
      <Cover
      img={menuImg}
      title="Our Menu"
      ></Cover>
     <Container >
            <section className="py-5">
                <SectionTitle
                    subHeading="Don't miss"
                    heading="Today's offer"
                ></SectionTitle>
        
            </section>

            <MenuCategory
            items={offered}
            >
           </MenuCategory>



     </Container>

     <Cover img={dessertImg} title="Dessert"></Cover>
     <Container>
     <MenuCategory
            items={dessert}
     ></MenuCategory>
     <div className="flex justify-center items-center">
      <button className="cart-btn uppercase fontPrimary text-center">Order your favorite food</button>
     </div>

     </Container>

     <Cover img={saladImg} title="Salad"></Cover>
     <Container>
        <MenuCategory
            items={salad}
        ></MenuCategory>

    <div className="flex justify-center items-center">
      <button className="cart-btn uppercase fontPrimary text-center">Order your favorite food</button>
     </div>

     </Container>

     <Cover img={pizzaImg} title="pizza"></Cover>
     <Container>
        <MenuCategory
            items={pizza}
        ></MenuCategory>

<div className="flex justify-center items-center">
      <button className="cart-btn uppercase fontPrimary text-center">Order your favorite food</button>
     </div>

     </Container>

     <Cover img={soupImg} title="soup"></Cover>
     <Container>
        <MenuCategory
            items={soup}
        ></MenuCategory>

<div className="flex justify-center items-center">
      <button className="cart-btn uppercase fontPrimary text-center">Order your favorite food</button>
     </div>

     </Container>
    </div>
  );
};

export default Menu;
