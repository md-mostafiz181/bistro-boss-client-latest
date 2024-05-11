import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from "../../assets/menu/menu-bg.jpg"

import Container from "../../components/Container/Container";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro || Menu</title>
      </Helmet>
      <Cover
      img={menuImg}
      title="Our Menu"
      ></Cover>
     <Container>
     
     </Container>


    
      <h1>this is menu</h1>
    </div>
  );
};

export default Menu;
