import React from 'react'
import classes from '../Hero/Offline.module.css'
import banner1 from '../../assets/Images/banner1.png';
import banner2 from '../../assets/Images/banner2.png';
import banner3 from '../../assets/Images/banner3.png';
import banner4 from '../../assets/Images/banner4.png';
import banner5 from '../../assets/Images/banner5.png';
import { motion } from "framer-motion";
import { IoIosSend } from "react-icons/io";

function Subscribe() {
  return (
     <section className={`${classes.ban} relative flex flex-col items-center justify-center py-20 `}>

                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5  m-15">
                    {[banner1, banner2, banner3, banner4, banner5].map((banner, i) => (
                        <motion.img
                            key={i}
                            src={banner}
                            alt={`ban${i + 1}`}
                            className="w-auto h-auto"
                            animate={{
                                y: [0, -15, 0], // move up → down → up
                            }}
                            transition={{
                                duration: 4 + i * 0.4, // slightly staggered timing
                                repeat: Infinity,      // loops forever
                                repeatType: "mirror",  // seamless motion
                                ease: "easeInOut",     // natural smoothness
                            }}
                        />
                    ))}
                </div>

                 <div className="text-center mb-8">
    <h3 className="text-[45px] text-[#3f4b49] font-semibold">Subscribe to our newsletter</h3>
    <p className="mt-3 text-[#9B9B9B] font-semibold">
      Get updates for new classes and new products
    </p>
  </div>

                <form className=' flex inset-0 items-center justify-center  '>
                    <IoIosSend className='absolute ml-[-175px] mr-[165px] text-[22px] text-[#9b9b9b]' />
                    <input type="email" name='email' id='email' placeholder='Your Email Address' />
                    <button className='text-[12px] font-bold px-[38px] py-[22px] text-white 
                             bg-[#6F948D] rounded-[34px] transition duration-300 transform ml-[-55px] '>SUBSCRIBE</button>
                </form>
            </section> 
  )
}

export default Subscribe
