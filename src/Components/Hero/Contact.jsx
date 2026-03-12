import classes from '../Hero/Contact.module.css';
import { FaPhone, FaLocationArrow } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { IoLogoSkype } from "react-icons/io5";
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";




export default function Contact() {
    return (
        <>
            <div className={classes.con}>
                <h1
                    className={`text-[#227179] text-[70px] font-bold text-center pt-62 ${classes.animateSlideUp}`}
                >
                    Contact Us
                </h1>
                <p
                    className={`text-center text-[23px] font-semibold pt-5 text-[#609199] ${classes.animateSlideUp}`}
                    style={{ animationDelay: '0.3s' }}
                >
                    Get In Touch
                </p>
            </div>

            {/* Contact Info Section */}
            <section className="py-16 bg-[#547670] text-[#ffffff] ">
                <div className={`${classes.animateSlideUp} max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left`}>

                    <div className="space-y-8 text-[35px] ">
                        <FaPhone className='mx-auto md:mx-0' />
                        <h3 className="text-lg font-bold text-[25px]">Phone</h3>
                        <p className="text-sm leading-relaxed text-[15px] font-semibold">
                            A wonderful serenity has taken possession of my entire soul, like these.
                        </p>
                        <p className="text-sm text-[15px] font-semibold">+1-2345-2345</p>
                    </div>

                    <div className="space-y-7 text-[40px]">
                        <MdOutlineMailOutline  className='mx-auto md:mx-0'/>
                        <h3 className="text-lg font-bold text-[25px]">Email</h3>
                        <p className="text-sm leading-relaxed text-[15px] font-semibold">
                            A wonderful serenity has taken possession of my entire soul, like these.
                        </p>
                        <p className="text-sm text-[15px] font-semibold">Contact@goodlayers.com</p>
                    </div>

                    <div className="space-y-8 text-[38px]">
                        <FaLocationArrow className='mx-auto md:mx-0' />
                        <h3 className="text-lg font-bold text-[25px]">Location</h3>
                        <p className="text-sm leading-relaxed text-[15px] font-semibold">
                            4 apt. Flawing Street. The Grand Avenue.<br />
                            Liverpool, UK 33342
                        </p>
                        <a href="#" className="text-sm no-underline text-[15px] font-semibold ">View On Google Map</a>
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <div className="flex justify-center items-center py-20 bg-[#f3f3f3] mt-10">
                <div className="w-full max-w-2xl px-6">
                    <h1 className="text-center lg:text-[40px] md:text-[30px] font-bold text-gray-700">
                        Leave us your info
                    </h1>
                    <p className="text-center text-gray-500 mt-3 font-semibold text-[18px]">
                        and we will get back to you.
                    </p>

                    <form className="mt-8 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-700 mb-1">Full Name*</label>
                                <input
                                    type="text"
                                    className="w-full border-b border-gray-300 focus:outline-none focus:border-gray-500 py-2"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-1">Email*</label>
                                <input
                                    type="email"
                                    className="w-full border-b border-gray-300 focus:outline-none focus:border-gray-500 py-2"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-1">Subject*</label>
                            <input
                                type="text"
                                className="w-full border-b border-gray-300 focus:outline-none focus:border-gray-500 py-2"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-1">Message*</label>
                            <textarea
                                rows="4"
                                className="w-full border-b border-gray-300 focus:outline-none focus:border-gray-500 py-2"
                            ></textarea>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="bg-[#547670] text-white px-7 py-3 rounded-md font-semibold hover:bg-[#355149] transition"
                            >
                                SUBMIT NOW
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Google Map */}
            <div className="w-full h-[500px]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317723.7363593278!2d-0.6924219283484365!3d51.52758529822163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sin!4v1755759211915!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>


            
            <div
                className="flex items-center justify-center text-center
             bg-white px-15 md:px-16 py-6 font-jost text-[19px] h-[180px]"
            >
                <div className="flex space-x-10 text-[#8fbab3] text-[20px] justify-center md:justify-end">
                    {[
                        {
                            icon: <MdEmail />,
                            color: "#EA4335",
                            link: "mailto:yourname@example.com",
                            title: "Send Email"
                        },
                        {
                            icon: <FaFacebookF />,
                            color: "#1877F2",
                            link: "https://www.facebook.com/",
                            title: "Facebook"
                        },
                        {
                            icon: <IoLogoSkype />,
                            color: "#00AFF0",
                            link: "https://www.skype.com/",
                            title: "Skype"
                        },
                        {
                            icon: <FaTwitter />,
                            color: "#1DA1F2",
                            link: "https://twitter.com/",
                            title: "Twitter"
                        },
                    ].map((item, index) => (
                        <motion.a
                            key={index}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={item.title}
                            className="text-black"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            whileHover={{
                                scale: 1.4,
                                color: item.color,
                                rotate: [0, -10, 10, 0],
                                transition: { duration: 0.6, ease: "easeInOut" },
                            }}
                        >
                            {item.icon}
                        </motion.a>
                    ))}
                </div>
            </div>
        </>
    );
}
