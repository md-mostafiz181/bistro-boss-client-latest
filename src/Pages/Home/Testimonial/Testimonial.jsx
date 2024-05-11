import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import "./Testimonial.css"
import {useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import '@smastrom/react-rating/style.css'
import { Rating } from "@smastrom/react-rating";


const Testimonial = () => {
    const [reviews,setReviews]=useState([])

    useEffect(()=>{
        fetch("reviews.json")
        .then(res=>res.json())
        .then(data=>{
            setReviews(data)
        })
    },[])
    return (
        
       <section className="py-10 px-1">
        <SectionTitle
        subHeading="What Our Client Say"
        heading="Testimonials"
        ></SectionTitle>


     <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        

        <div >
            {
                reviews.map(review => <SwiperSlide
                key={review._id}
                >


                    <div className="flex flex-col items-center">

                    <Rating
                        style={{ maxWidth: 180 }}
                        value={review.rating}
                        readOnly
                    />
                        <p className="px-16 pt-4 fontPrimary">{review.details}</p>
                        <h3 className="lg:text-2xl sm:text-1xl md:text-1xl fontPrimary text-orange-400 uppercase mt-3">{review.name} </h3>

                       
                    </div>
                </SwiperSlide>)
            }
        </div>

      </Swiper>


         </section>
    );
};

export default Testimonial;