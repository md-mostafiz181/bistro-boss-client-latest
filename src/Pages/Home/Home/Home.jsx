import Container from "../../../components/Container/Container";
import Banner from "../Banner/Banner";
import Category from "./Category/Category";


const Home = () => {
    return (
        
        <div>
            <Banner></Banner>
            <Container>
              <Category></Category>
            </Container>

        </div>
    );
};

export default Home;