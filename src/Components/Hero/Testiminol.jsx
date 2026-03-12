import cer1 from "../../assets/Images/cer1.jpg";
import cer2 from "../../assets/Images/cer2.jpg";
import cer3 from "../../assets/Images/cer3.jpg";
import cer4 from "../../assets/Images/cer4.jpg";
import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <motion.div
      whileHover={{ scale: 1.2, color: "#14b8a6" }}
      className="absolute right-6 lg:right-33 bottom-[120px] lg:bottom-[272px] transform -translate-y-1/2 cursor-pointer text-gray-400 hover:text-teal-600 z-10 text-[40px] lg:text-[60px]"
      onClick={onClick}
    >
      →
    </motion.div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <motion.div
      whileHover={{ scale: 1.2, color: "#14b8a6" }}
      className="absolute left-6 lg:right-50 bottom-[120px] lg:bottom-[272px] transform -translate-y-1/2 cursor-pointer text-gray-400 hover:text-teal-600 z-10 text-[40px] lg:text-[60px]"
      onClick={onClick}
    >
      ←
    </motion.div>
  );
}

function Testiminol() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    autoplay: false,
    centerMode: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // small tablets / phones
        settings: {
          slidesToShow: 1,
          arrows: false, // hide arrows on small screens
          autoplay: true,
          autoplaySpeed: 3500,
        },
      },
       {
        breakpoint: 320, // small tablets / phones
        settings: {
          slidesToShow: 1,
          arrows: false, // hide arrows on small screens
          autoplay: true,
          autoplaySpeed: 3500,
        },
      },
    ],
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8 },
    }),
  };

  return (
    <motion.div
      className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-12 overflow-hidden w-full"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Heading */}
      <motion.h3
        className="text-[#227179] text-[32px] sm:text-[38px] lg:text-[45px] ml-0 lg:ml-35 font-semibold mb-2 text-center lg:text-left"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Testimonial
      </motion.h3>

      <motion.p
        className="text-[#878787] text-[16px] sm:text-[18px] ml-0 lg:ml-35 mb-10 text-center lg:text-left"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
      >
        What people say about us
      </motion.p>

      {/* Carousel */}
      <div className="relative w-full">
        <Slider {...settings}>
          {[cer1, cer2, cer3, cer4].map((img, index) => (
            <motion.div
              key={index}
              className="px-2 sm:px-3"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{
                  scale: 1.03,
                  y: -8,
                  boxShadow: "0px 15px 35px rgba(0,0,0,0.15)",
                }}
                transition={{ type: "spring", stiffness: 150 }}
                className="bg-white shadow-md rounded-md p-4 sm:p-6 border-b-4 border-teal-600 w-full"
              >
                <p className="text-gray-600 text-[14px] sm:text-[16px] leading-relaxed mb-4">
                  The Yoga Yajnavalkya is another early text on yoga that provides
                  description of Yoga techniques and its benefits. Two of its
                  Sanskrit palm-leaf manuscripts have been dated, one is from the
                  early 10th-century CE and another more firmly.
                </p>
                <div className="flex items-center space-x-3 sm:space-x-4 h-25">
                  <motion.img
                    src={img}
                    alt={`User ${index + 1}`}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 3 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <div>
                    <h4 className="text-teal-700 font-semibold uppercase tracking-wide text-sm sm:text-base">
                      {["John Smith", "Jane Doe", "Hana Smith", "Mildred Reed"][index]}
                    </h4>
                    <p className="text-gray-800 font-semibold text-sm sm:text-[15px]">
                      Customer
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </motion.div>
  );
}

export default Testiminol;
