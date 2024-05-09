import "./Category.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slide1 from "../../../../assets/home/slide1.jpg"
import slide2 from "../../../../assets/home/slide2.jpg"
import slide3 from "../../../../assets/home/slide3.jpg"
import slide4 from "../../../../assets/home/slide4.jpg"
import slide5 from "../../../../assets/home/slide5.jpg"


const Category = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        id="category-part"
        breakpoints={{
            1024: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 2,
            },
            576: {
              slidesPerView: 1,
            },
          }}
      >
        <SwiperSlide>
            <img className="image"  src={slide1} alt="" />
            <h1 className="text-center text-5xl uppercase text-white -mt-20">Salad</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt="" />
            <h1 className="text-center text-5xl uppercase text-white -mt-20">Pizza</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide3} alt="" />
            <h1 className="text-center text-5xl uppercase text-white -mt-20">Soup</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide4} alt="" />
            <h1 className="text-center text-5xl uppercase text-white -mt-20">Dessert</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide5} alt="" />
            <h1 className="text-center text-5xl uppercase text-white -mt-20">Salad</h1>
        </SwiperSlide>

      </Swiper>
    </>
  );
};

export default Category;
