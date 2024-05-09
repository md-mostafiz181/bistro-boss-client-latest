import "./About.css"
// import aboutImg from "../../../assets/home/chef-service.jpg"

const About = () => {
    return (
        
        <div id="about-part">
            <div className="img">
                    {/* <img src={aboutImg} alt="" /> */}
                    <div className="overlay">
                        <div className="about-box py-10">
                            <h3 className="text-2xl sm:text-1xl uppercase text-center pb-5">Bistro Boss</h3>
                            <p className="text-1xl primaryFont text-center pb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sapiente dolorem neque accusantium veritatis itaque dicta perspiciatis, necessitatibus eum quod ratione asperiores qui repudiandae quidem doloribus magnam magni maxime! Inventore modi .</p>
                        </div>
                    </div>
            </div>

        </div>
    );
};

export default About;