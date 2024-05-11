import Container from "../../../components/Container/Container";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"
import "./Featured.css"

const Featured = () => {
    return (
        
        <section id="featured-part" className="bg-fixed" >

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
                    <div className="right w-full md:w-1/2  px-5 py-10">
                        <h1 className="lg:text-2xl md:text-2xl sm:text-1xl fontPrimary text-white mb-3">March 20, 2023</h1>
                        <p className="lg:text-1xl sm:text-xl md:text-xl fontPrimary font-bold text-white mb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio repellat, aperiam a autem vel dolor voluptas perferendis neque totam natus deserunt cum aspernatur quos nulla fuga, nihil corporis dolores quo similique provident sequi. Hic dolorem reprehenderit tenetur officia provident est, accusamus sunt doloribus, laboriosam quas earum.</p>

                        <button className="btn-read">Read More</button>
                    </div>
                </div>
               </Container>
            </section>

        </section>
    );
};

export default Featured;