import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, FreeMode, Navigation, Pagination, Mousewheel, Keyboard, Thumbs } from "swiper";
import useAxios from "../useAxios";
import "swiper/css";
import {
  Autoplay,
  FreeMode,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
  Thumbs,
} from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slider = () => {
  const { data, isLoading, isError } = useAxios(
    "https://fakestoreapi.com/products"
  );
  return (
    <>
      <Swiper
        cssMode={true}
        className="mySwiper"
        modules={[
          Pagination,
          FreeMode,
          Navigation,
          Mousewheel,
          Autoplay,
          Thumbs,
          Keyboard,
        ]}
        pagination={{ clickable: true }}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={"auto"}
        style={{
          "--swiper-navigation-color": "#000",
          "--swiper-pagination-color": "#000",
          margin: "20px",
        }}
      >
        {data &&
          data.map((item) => {
            return (
              <SwiperSlide>
                <img style={{ width: "500px" }} src={item.image} alt="" />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
};

export default Slider;
