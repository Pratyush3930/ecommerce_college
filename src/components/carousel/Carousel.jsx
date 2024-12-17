import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Carousel = () => {

  const links = ["https://storage.googleapis.com/website-production/uploads/2023/01/new-yorker-banner-ad-.png","https://www.benchcraftcompany.com/images/CG1resized.png","https://www.shutterstock.com/image-vector/winter-sale-horizontal-advertising-banner-260nw-536057692.jpg","https://i.pinimg.com/736x/fd/2e/16/fd2e16de809e4727308251edf81a2831.jpg"]

  const banner = (link) => (
    <div
      className={`h-48 w-full object-fill`}
      // style={{ backgroundColor: `${color}` }}
    >
      <img src={link} alt="" className="w-full h-full"/>
    </div>
  );

  return (
    <div>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id="panel-header"
        >
          Advertisements
        </AccordionSummary>
        <AccordionDetails>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, Autoplay]}
            spaceBetween={50}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>{banner(links[0])}</SwiperSlide>
            <SwiperSlide>{banner(links[1])}</SwiperSlide>
            <SwiperSlide>{banner(links[2])}</SwiperSlide>
            <SwiperSlide>{banner(links[3])}</SwiperSlide>
          </Swiper>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Carousel;
