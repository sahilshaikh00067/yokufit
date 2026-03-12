import classes from '../Hero/About.module.css';
import about1 from '../../assets/Images/about1.png';
import about2 from '../../assets/Images/about2.jpg';
import about3 from '../../assets/Images/about3.png';
import about4 from '../../assets/Images/about4.jpg';
import icon1 from '../../assets/Images/icon1.png';
import icon2 from '../../assets/Images/icon2.png';
import icon3 from '../../assets/Images/icon3.png';
import icon4 from '../../assets/Images/icon4.png';
import logo1 from '../../assets/Images/logo1.png';
import logo2 from '../../assets/Images/logo2.png';
import logo3 from '../../assets/Images/logo3.png';
import logo4 from '../../assets/Images/logo4.png';

import SlotCounter from 'react-slot-counter';
import cer1 from '../../assets/Images/cer1.jpg'
import cer2 from '../../assets/Images/cer2.jpg'
import cer3 from '../../assets/Images/cer3.jpg'
import cer4 from '../../assets/Images/cer4.jpg'
import React, { Component } from "react";
import Slider from "react-slick";
import Testiminol from './Testiminol';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Subscribe from '../Reuse/Subscribe'



export default function About() {



    return (
        <>
            <div className={classes.off}>
                            <motion.h1
                                className="text-[59px] font-semibold text-[#227179] text-center"
                                initial={{ opacity: 0, y: 50 }}       // start faded & slightly below
                                whileInView={{ opacity: 1, y: 0 }}    // fade in + slide up
                                transition={{
                                    duration: 1.2,                      // smooth, not too fast
                                    ease: "easeOut",
                                }}
                            >
                                About
                            </motion.h1>
                        </div>

            <div className='relative w-full max-h-[500px] overflow-hidden'>
                <img
                    src={about2}
                    alt="about2"
                    className="w-full h-auto  transition-transform duration-500"
                />
            </div>

            <section className='grid grid-cols-2 '>
                <div className='w-full'>
                    <img
                        src={about3}
                        alt="about3"
                        className=" scale-114  duration-500"
                    />
                </div>
                <div className='lg:ml-20 lg:pr-20'>
                    <h6 className='text-[22px] text-[#3DBCA8] '>About Our School _____</h6>
                    <h2 className='text-[#227179] text-[40px] font-semibold'>How we become Yoku</h2>
                    <p className=' text-[#4F7770] mt-6  text-[20px] '>Modern yoga consists of a range of techniques including asanas (postures) and meditation derived from some of the philosophies,
                        teachings and practices of the Yoga school, which is one of the six schools of traditional Hindu philosophies, and organised into a wide variety of schools and denominations.
                        It has been described by Elizabeth de Michelis as having four types, namely:
                        Modern Psych osomatic Yoga, as in The Yoga Institute.</p>
                    <button className=' mt-[50px] text-[16px] font-semibold px-[32px] py-[18px]
                    bg-[rgb(251,105,98)] text-white rounded-[34px] hover:bg-white hover:text-[rgb(251,105,98)]
                     transition duration-300 transform shadow-[0_10px_25px_rgba(242,185,182,100)]'>Most Instructors</button>
                </div>
            </section>



           


       {/* WRAPPER DIV to contain everything properly */}
<div className="relative w-full overflow-hidden  ">

  {/* Our Faith Text Section */}
  <motion.div
    className="mt-30"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <motion.h6
      className="text-[#3DBCA8] text-[25px] ml-22"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      Our Faith  ______
    </motion.h6>

    <motion.h3
      className="text-[43px] text-[#227179] ml-23 font-semibold"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, color: "#3DBCA8" }}
    >
      We believe in Making
    </motion.h3>

    <motion.h3
      className="text-[43px] text-[#227179] ml-24 font-semibold mt-[-12px]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, color: "#3DBCA8" }}
    >
      Yoga Inclusive
    </motion.h3>
  </motion.div>

  {/* BACKGROUND IMAGE */}
  <section className="relative mt-10">
    <div className="w-full overflow-hidden">
      <img
        src={about4}
        alt="yogapose"
        className="scale-129 mt-[45px] duration-500"
      />
    </div>

    {/* CARDS GRID */}
    <motion.div
      className="
        mt-[-610px] 
        relative 
        text-[#e6e6e6] 
        grid 
        grid-rows-2 
        lg:grid-cols-2 
        text-center 
        gap-20
        lg:mr-175  
        m-10 
        ml-15
      "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: { transition: { staggerChildren: 0.2 } },
      }}
    >
      {[icon1, icon2, icon3, icon4].map((icon, i) => (
        <motion.div
          key={i}
          className="border-[1px] h-[200px] rounded-[10px] w-[250px] bg-white/95 shadow-sm"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 10px 25px rgba(0,0,0,0.15)",
          }}
        >
          <motion.img
            src={icon}
            alt={`icon-${i + 1}`}
            className="w-[70px] mt-[-40px] ml-[40px]"
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4 + i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <h6 className="text-black text-[20px] font-semibold pt-5">
            How we become Yoku
          </h6>
          <p className="text-[#5e5e5e] font-semibold">
            Modern yoga consists of a range of techniques including asanas and meditation derived
          </p>
        </motion.div>
      ))}
    </motion.div>
  </section>
</div>

      



            


            <div className={classes.bga}>
                {/* TEXT SECTION */}
                <motion.div
                    className="inset-0"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <motion.h2
                        className="text-[40px]  text-[#3f4b49] font-semibold text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        What's the numbers
                    </motion.h2>

                    <motion.p
                        className="pt-9 text-[#9B9B9B] font-semibold text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        Modern yoga consists of a range of techniques including asanas (postures) and meditation derived from some of <br />
                        the philosophies, teachings and practices of the Yoga school, which is one of the six schools of traditional Hindu
                    </motion.p>

                    <motion.button
                        className="text-[16px] font-semibold px-[32px] py-[18px] bg-white 
                 text-[#547670] rounded-[34px] transition duration-300 transform"
                        whileHover={{
                            scale: 1.08,
                            backgroundColor: "#3CC3A9",
                            color: "#fff",
                            boxShadow: "0px 5px 20px rgba(60,195,169,0.4)",
                        }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <Link to="/online">Browse Courses</Link>
                    </motion.button>
                </motion.div>

                {/* STATS SECTION */}
<motion.section
  className="
    inline-flex
    w-full
    gap-10 
    mx-auto 
    mt-20 
    relative 
    lg:absolute 
    items-center
    justify-evenly
    flex-wrap
  "
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                        visible: { transition: { staggerChildren: 0.3 } },
                    }}
                    viewport={{ once: true }}
                >
                    {/* Card 1 */}
                    <motion.div
                        className=" "
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <motion.img
                            className="w-[30%]"
                            src={logo1}
                            alt="logo1"
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.h2
                            className="text-[45px] mt-[-5px] font-semibold"
                            whileInView={{ scale: [0.8, 1], opacity: [0, 1] }}
                            transition={{ duration: 1 }}
                        >
                            <SlotCounter value={"1M"} />
                        </motion.h2>
                        <h4 className="text-[17px] mt-[-0px] font-semibold text-[#3CC3A9]">
                            CLASS VIEWS
                        </h4>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        className=""
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <motion.img
                            className="w-[30%]"
                            src={logo2}
                            alt="logo2"
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.h2
                            className="text-[45px] mt-[-5px] font-semibold"
                            whileInView={{ scale: [0.8, 1], opacity: [0, 1] }}
                            transition={{ duration: 1 }}
                        >
                            <SlotCounter value={"48K"} />
                        </motion.h2>
                        <h4 className="text-[17px] mt-[-0px] font-semibold text-[#3CC3A9]">
                            HAPPY STUDENTS
                        </h4>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        className=""
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <motion.img
                            className="w-[22%]"
                            src={logo3}
                            alt="logo3"
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.h2
                            className="text-[45px] mt-[-5px] font-semibold"
                            whileInView={{ scale: [0.8, 1], opacity: [0, 1] }}
                            transition={{ duration: 1 }}
                        >
                            <SlotCounter value={"90%"} />
                        </motion.h2>
                        <h4 className="text-[17px] mt-[-0px] font-semibold text-[#3CC3A9]">
                            STATISFICATION
                        </h4>
                    </motion.div>

                    {/* Card 4 */}
                    <motion.div
                        className=""
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <motion.img
                            className="w-[22%]"
                            src={logo4}
                            alt="logo4"
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.h2
                            className="text-[45px] mt-[-5px] font-semibold"
                            whileInView={{ scale: [0.8, 1], opacity: [0, 1] }}
                            transition={{ duration: 1 }}
                        >
                            <SlotCounter value={20} />
                        </motion.h2>
                        <h4 className="text-[17px] mt-[-0px] font-semibold text-[#3CC3A9]">
                            AWESOME INSTRUCTORS
                        </h4>
                    </motion.div>
                </motion.section>
            </div>





            <Testiminol />
            <Subscribe/>

            










        </>
    );
}
