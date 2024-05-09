import Container from "../../../components/Container/Container";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"
import "./Featured.css"

const Featured = () => {
    return (
        
        <section id="featured-part" >

            <section className="overlay pt-10">
            <section className="mt-5 text-white">
                <SectionTitle
                subHeading="Check it out"
                heading="From Our Menu"
                
                ></SectionTitle>
                </section>


               <Container>
               <div className="flex flex-col md:flex-row lg:space-x-2 space-y-2 md:space-y-0">
                    <div className="left w-full md:w-1/2  bg-orange-500 ">
                        <img src={featuredImg} alt="" />

                    </div>
                    <div className="right w-full md:w-1/2  bg-green-500">
                        <h1>March 20, 2023</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio repellat, aperiam a autem vel dolor voluptas perferendis neque totam natus deserunt cum aspernatur quos nulla fuga, nihil corporis dolores quo similique provident sequi. Hic dolorem reprehenderit tenetur officia provident est, accusamus sunt doloribus, laboriosam quas earum.</p>

                        <button>Read More</button>
                    </div>
                </div>
               </Container>
            </section>

        </section>
    );
};

export default Featured;