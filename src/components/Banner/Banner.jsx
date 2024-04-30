import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import {Autoplay, EffectFade} from "swiper/modules";
import SliderImage1 from "../../assets/sliderImage!.jpg";
import SliderImage2 from "../../assets/sliderImage2.jpg";
import SliderImage3 from "../../assets/sliderImage3.jpg";
const Banner = () => {
  return (
    <div className="lg:px-12 bg-[#eddfe3]">
      <Swiper
        modules={[EffectFade, Autoplay]}
        className="mySwiper"
        effect="fade"
        fadeEffect={{crossFade: true}}
        spaceBetween={30}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className="md:h-[500px] h-auto">
            <div className="h-full flex flex-col md:flex-row justify-between md:gap-2 gap-10 items-center">
              <div className="flex-1 mt-10 md:mt-0 w-full md:w-auto">
                <p className="xl:text-[50px] lg:text-[40px] md:text-[32px] text-[30px] font-bold text-center md:text-left">
                  Landscape Painting
                </p>
                <p className="font-medium text-black/60 md:text-lg text-center md:text-left">
                  Mountain view canvas, Forest based Landscape painting
                </p>
              </div>

              {/* left */}
              <div className="flex-1 mb-10 md:mb-0">
                <img
                  className="md:h-[500px] h-full rounded-xl object-cover bg-cover md:w-[700px] w-full"
                  src={SliderImage1}
                  alt=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:h-[500px] h-auto">
            <div className="h-full flex flex-col md:flex-row justify-between md:gap-2 gap-10 items-center">
              <div className="flex-1 mt-10 md:mt-0 w-full md:w-auto">
                <p className="xl:text-[50px] lg:text-[40px] md:text-[32px] text-[30px] font-bold text-center md:text-left">
                  Portrait Drawing
                </p>
                <p className="font-medium text-black/60 md:text-lg text-center md:text-left">
                  : Pencil Sketch Portrait, Ink Outline Portrait, Acrylic
                  Portrait Canvas
                </p>
              </div>

              {/* left */}
              <div className=" flex-1 mb-10 md:mb-0">
                <img
                  className="md:h-[500px] h-full rounded-xl object-cover bg-cover md:w-[700px] w-full"
                  src={SliderImage2}
                  alt=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:h-[500px] h-auto">
            <div className="h-full flex flex-col md:flex-row justify-between md:gap-2 gap-10 items-center">
              <div className="flex-1 mt-10 md:mt-0 w-full md:w-auto">
                <p className="xl:text-[50px] lg:text-[40px] md:text-[32px] text-[30px] font-bold text-center md:text-left">
                  Cartoon Drawing
                </p>
                <p className="font-medium text-black/60 md:text-lg text-center md:text-left">
                  Comic Strip Drawing, Superhero Cartoon Design
                </p>
              </div>

              {/* left */}
              <div className="flex-1 mb-10 md:mb-0">
                <img
                  className="md:h-[500px] h-full rounded-xl object-cover bg-cover md:w-[700px] w-full"
                  src={SliderImage3}
                  alt=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
