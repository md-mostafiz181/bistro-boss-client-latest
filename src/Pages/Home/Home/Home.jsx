import Container from "../../../components/Container/Container";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Chef from "../Chef/Chef";
import Contact from "../Contact/Contact";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Category from "./Category/Category";


const Home = () => {
    return (
        
        <div>
            <Banner></Banner>
            <Container>
              <Category></Category>
              <About></About>
              <PopularMenu></PopularMenu>
              <Contact></Contact>
              <Chef></Chef>
              
            </Container>
            <Featured></Featured>

           

        </div>
    );
};

export default Home;