import Container from "../../../components/Container/Container";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Category from "./Category/Category";


const Home = () => {
    return (
        
        <div>
            <Banner></Banner>
            <Container>
              <Category></Category>
              <About></About>
              
            </Container>

           

        </div>
    );
};

export default Home;