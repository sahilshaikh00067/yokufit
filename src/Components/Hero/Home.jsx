import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "../Hero/Home.module.css";
import homeimg from "../../assets/Images/homeimg.png";
import mini1 from "../../assets/Images/mini1.png";
import mini2 from "../../assets/Images/mini2.png";
import mini3 from "../../assets/Images/mini3.png";
import homeimg4 from "../../assets/Images/homeimg4.png";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import modern from "../../assets/Images/modern.png"
import banner1 from '../../assets/Images/banner1.png';
import banner2 from '../../assets/Images/banner2.png';
import banner3 from '../../assets/Images/banner3.png';
import banner4 from '../../assets/Images/banner4.png';
import banner5 from '../../assets/Images/banner5.png';
import artbg from '../../assets/Images/artbg.jpg';
import yokaicon from '../../assets/Images/yokaicon.png'
import { SlBookOpen } from "react-icons/sl";
import { FaLightbulb } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import endcircle from '../../assets/Images/endcircle.png'
import circleuper from '../../assets/Images/circleuper.png'
import { IoIosSend } from "react-icons/io";
import Testiminol from "./Testiminol";
import test from "../../assets/Images/test.jpg"
import { motion } from "framer-motion";


function NextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="absolute right-10  bottom-2/4  transform -translate-y-1/2 cursor-pointer text-gray-400 hover:text-teal-600 z-10 text-[60px]"
            onClick={onClick}
        >
            →
        </div>
    );
}

// Custom prev arrow
function PrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="absolute left-13 top-1/3 transform -translate-y-1/2 cursor-pointer text-gray-400 hover:text-teal-600 z-10 text-[60px]"
            onClick={onClick}
        >
            ←
        </div>
    );
}

export default function Home() {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);



    const settings = {
        infinite: true,
        dots: true,
        speed: 900,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        slidesToShow: 2.9,
        slidesToScroll: 1,
        className: "center",
        centerMode: true,
        centerPadding: "30px",
        autoplay: false,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1280, // Large screens (e.g. laptops)
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 1,
                    centerPadding: "40px",
                },
            },
            {
                breakpoint: 1024, // Tablets and small laptops
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: "20px",
                },
            },
            {
                breakpoint: 768, // Mobile landscape
                settings: {
                    slidesToShow: 1.3,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: "30px",
                },
            },
            {
                breakpoint: 480, // Mobile portrait
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: "10px",
                },
            },
            {
                breakpoint: 320, // Very small devices
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                },
            },
        ],
    };

    const settingss = {
        infinite: true,
        dots: false,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        speed: 500,
        slidesToShow: 2.6,
        slidesToScroll: 1,
        className: "center",
        centerMode: true,
        centerPadding: "190px",
    };



    useEffect(() => {
        let ignore = false;
        fetch("https://yokufit.onrender.com/api/posts/")
            .then((res) => {
                console.log("Response Status:", res.status);
                return res.json();
            })
            .then((data) => {
                if (!ignore) {
                    console.log("Raw API Data:", data);
                    console.log("Type:", typeof data);
                    console.log("Is Array?", Array.isArray(data));

                    if (Array.isArray(data)) {
                        setPosts(data);
                    } else if (data.results) {
                        setPosts(data.results);
                    } else {
                        console.warn("Unexpected API format:", data);
                    }

                    setLoading(false);
                }
            })
            .catch((err) => {
                console.error("Error fetching posts:", err);
                setLoading(false);
            });

        return () => {
            ignore = true;
        };
    }, []);

    return (
        <>
            <section
                className={`bg-[rgb(219,232,231)] ${classes.main} grid grid-cols-2 overflow-hidden`}
            >
                {/* LEFT SIDE TEXT */}
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={` text-[75px] text-[#6F948D] items-center justify-center mt-[280px]`}
                >
                    <h2 className="grid justify-center">
                        Online{" "}
                        <span className="text-[#404B48] text-[85px] font-bold mt-[-35px]">
                            Yoga Classes
                        </span>
                    </h2>

                    <p className="text-[23px] ml-[95px] mt-[35px] text-[#547670]">
                        Yoka is the most popular online yoga classes, trusted by 100,000+
                        customers. Our instructers are well- known and certified.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className=" ml-[100px] text-[16px] font-semibold px-[32px] py-[18px] bg-[rgb(251,105,98)]
                     text-white rounded-[34px] hover:bg-white hover:text-[rgb(251,105,98)] transition duration-300 transform"
                    >
                        <Link to="/online">Browse Courses</Link>
                    </motion.button>

                    <motion.img
                        src={homeimg4}
                        alt="down"
                        className="ml-[100px] mt-[100px]"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.5 }}
                    />
                </motion.div>

                {/* RIGHT SIDE IMAGE */}
                <motion.div
                    initial={{ opacity: 0, x: 120 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                >
                    <img
                        src={homeimg}
                        alt="home"
                        className=" relative scale-145 ml-[180px] mt-[280px] mb-[105px]"
                    />
                </motion.div>
            </section>



            <section
                className={`bg-[rgb(232,235,234)] ${classes.main} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:pl-30 p-8`}
            >
                {/* BOX 1 */}
                <div className="text-[23px] text-[#6F948D] flex gap-3  flex-wrap text-center lg:text-left place-items-center lg:place-items-start">
                    <img src={mini1} alt="mini1" className="w-[60px]" />
                    <div className="space-y-3 flex justify-center items-center flex-col">
                        <h2 className="text-[#227179] font-semibold">Many Styles</h2>
                        <p className="text-[15px] text-[#404B48] font-semibold max-w-[250px]">
                            20+ Styles of Yoga Workout and Meditation that suit everyone
                        </p>
                        <hr className="h-[4px] bg-[#5e5e5e] w-[60px]" />
                    </div>
                </div>

                {/* BOX 2 */}
                <div className="text-[23px] text-[#6F948D] flex gap-3 flex-wrap text-center lg:text-left place-items-center lg:place-items-start">
                    <img src={mini2} alt="mini2" className="w-[60px]" />
                    <div className="space-y-3 flex justify-center items-center flex-col">
                        <h2 className="text-[#227179] font-semibold">Pro Instructors</h2>
                        <p className="text-[15px] text-[#404B48] font-semibold max-w-[250px]">
                            Professional Yoga Instructors from around the world
                        </p>
                        <hr className="h-[4px] bg-[#5e5e5e] w-[60px] " />
                    </div>
                </div>

                {/* BOX 3 */}
                <div className="text-[23px] text-[#6F948D] flex gap-3 flex-wrap text-center lg:text-left place-items-center lg:place-items-start">
                    <img src={mini3} alt="mini3" className="w-[60px]" />
                    <div className="space-y-3 flex justify-center items-center flex-col">
                        <h2 className="text-[#227179] font-semibold">Quality Content</h2>
                        <p className="text-[15px] text-[#404B48] font-semibold max-w-[250px]">
                            All Our Classes are Well Planned by Professional Yoga Instructors
                        </p>
                        <hr className="h-[4px] bg-[#5e5e5e] w-[60px]" />
                    </div>
                </div>
            </section>


            <section className="p-0 bg-white relative">
                <div className="lg:pl-30 ">
                    <div className={classes.bac}>
                        <h2 className="text-[45px] font-semibold mb-6 pt-25 text-[#227179]">
                            Popular Online Classes
                        </h2>

                        <p className="text-[#878787] font-semibold pb-18">
                            A meditative means of discovering dysfunctional perception and cognition,
                            as well as overcoming it to release
                            <br />
                            any suffering, find inner peace and salvation.
                        </p>
                    </div>
                </div>

                <div className="slider-container overflow-hidden pb-19 h-[510px] z-10 relative">
                    {/* <button className="relative ml-[290px]  text-[16px] font-semibold px-[32px] py-[18px] bg-[#6f948d]
                     text-white rounded-[34px] transition duration-300 transform">Browse All Classes → </button> */}


                    <Slider {...settings}>
                        {loading ? (
                            <p className="text-center text-lg">Loading posts...</p>
                        ) : posts.length === 0 ? (
                            <p className="text-center text-lg text-red-500">
                                No posts found from API
                            </p>
                        ) : (
                            posts.map((post) => (
                                <div
                                    key={post.id}
                                    className="flex flex-col items-center relative group "
                                >
                                    {/* Number div */}
                                    <div className="absolute ml-50 w-[490px] h-[100%] bg-[white] text-[#547670]
                                     flex justify-center items-center flex-col text-[18px] opacity-0 group-hover:opacity-80 transition-opacity duration-300">
                                        <p className="flex gap-2" ><SlBookOpen />{post.p1}</p>
                                        <p className="flex gap-2"><LuUsers />{post.p2}</p>
                                        <p className="flex gap-2"><FaLightbulb />{post.p3}</p>
                                    </div>

                                    <div className=" z-10  ">
                                        <img src={`https://yokufit.onrender.com${post.image}`}
                                            alt={post.title}
                                            className="w-[490px] ml-50" />

                                        <div className={`${classes.med}shadow-[1px_2px_25px_rgba(64,64,64,0.8)] w-[440px] ml-50 h-[190px] absolute 
                                        bottom-[-30px] left-1/2 -translate-x-1/2 bg-white p-5 text-left z-80  `}>
                                            <p className="text-sm text-[#a9a9a9]"><Link to={`/posts/${post.id}`} className="text-[#227179] ">
                                                {post.description}
                                            </Link></p>
                                            <h3 className="text-xl font-bold mt-2 text-[#227179]">  <Link to={`/posts/${post.id}`} className="text-[#227179] ">
                                                {post.title}
                                            </Link></h3>
                                            <h4 className="text-[23px] font-bold mt-2 text-[#404B48]">{post.paragraph}</h4>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </Slider>

                    {/* <div className="absolute top-0 left-0 w-67 h-[509px] bg-white/35 z-0 "></div>
                    <div className="absolute top-0 right-0 w-58 h-[509px] bg-white/35 z-0"></div> */}
                </div>
            </section>



















            <div className={`${classes.mbg} grid grid-cols-2 relative`}>
                <div>
                    <img src={modern} alt="modern"
                        className="absolute ml-[-134px] mt-25" />

                </div>
                <div className="mt-55 ">
                    <h5 className="text-[#3dbca8] text-[28px]">Our foundation is</h5>
                    <h2 className="text-[#227179] text-[55px] font-semibold">Modern Yoga</h2>
                    <p className="text-[#506762] text-[19px] py-8">Modern postural yoga consists largely but not exclusively of the practice of <br /> asanas.
                        There were very few standing asanas before 1900. By 2012, there <br /> were at least 19 widespread styles from Ashtanga Yoga to Viniyoga.
                        These <br />emphasise different aspects including aerobic exercise, precision in the <br /> asanas, and spirituality in the Haṭha yoga tradition.
                        For example, Bikram <br /> Yoga has an aerobic exercise style with rooms heated to 105 °F
                    </p>

                    <button className="font-semibold px-[38px] py-[16px] border-2 [#3dbca8] text-[#3dbca8] rounded-[34px]"><Link to="/about">Learn More</Link></button>
                    <button className=" shadow-[0_10px_25px_rgba(61,188,168,0.3)] font-semibold px-[42px] text-white ml-4 py-[16px] bg-[#3dbca8]
                     rounded-[34px]">
                        <Link to="/about">
                            Our Story</Link></button>

                </div>
            </div>

            <section className="p-0 bg-white mt-[-550px]">
                <div className="pl-30 relative ">
                    {/* <h2 className="text-[#d7d7d7] font-bold w-2">_______</h2> */}

                    <h3 className="text-[#227179] text-[42px] font-semibold pb-10">Our Instructors</h3>

                    <p className="text-[#767575] font-semibold pb-17">A meditative means of discovering dysfunctional perception and cognition, as well as overcoming it to release<br /> any suffering, find inner peace and salvation.
                    </p>

                </div>


                <div className="slider-container overflow-hidden h-[100vh] relative">
                    <Slider {...settingss}>
                        {loading ? (
                            <p className="text-center text-lg">Loading posts...</p>
                        ) : posts.length === 0 ? (
                            <p className="text-center text-lg text-red-500">
                                No posts found from API
                            </p>
                        ) : (
                            posts.map((post) => (

                                <div
                                    key={post.id}
                                    className="flex flex-col gap-15"

                                >
                                    <div className="relative">
                                        <img src={`https://yokufit.onrender.com${post.image2}`}
                                            alt={post.titles}
                                            className="w-[420px] ml-[190px] " />

                                    </div>
                                    <h3 className="text-xl font-semibold ml-78 text-center mt-2 text-[#227179]">
                                        <Link to={`/postss/${post.id}`} className="text-[#227179]">
                                            {post.titles}
                                        </Link>
                                    </h3>
                                    <h4 className="text-[18px] text-center mt-3 text-[#AFAFAF] ml-78 ">
                                        {post.paragraphs}
                                    </h4>
                                </div>
                            ))
                        )}
                    </Slider>

                    <div className="absolute top-0 left-0 w-25 h-[509px] bg-white/35 z-0"></div>
                    <div className="absolute top-0 right-0 w-22 h-[509px] bg-white/35 z-0"></div>
                </div>
            </section>



















            <div
                className={`${classes.fea} absolute inset-0 justify-center items-center overflow-hidden`}
            >
                {/* Fade in title */}
                <motion.h6
                    className="text-[25px] text-[#547670] pt-18 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    We are featured in
                </motion.h6>

                {/* Animated logos */}
                <motion.div
                    className="absolute grid grid-cols-5 ml-40 mt-20 gap-12 w-310"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true }}
                >
                    {/* Each logo softly floats */}
                    <motion.img
                        src={banner1}
                        alt="ban1"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.img
                        src={banner2}
                        alt="ban2"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                    />
                    <motion.img
                        src={banner3}
                        alt="ban3"
                        animate={{ y: [0, -12, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                    />
                    <motion.img
                        src={banner4}
                        alt="ban4"
                        animate={{ y: [0, -9, 0] }}
                        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
                    />
                    <motion.img
                        src={banner5}
                        alt="ban5"
                        animate={{ y: [0, -11, 0] }}
                        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                    />
                </motion.div>
            </div>

            <section className=" relative">

                <div className={`${classes.artp} scale-100 `}>
                    <div>
                        <img src={yokaicon} alt="yoga icon "
                            className="w-25 absolute mt-15 ml-30" />
                        <h2 className="text-[#227179] text-[50px] font-semibold ml-32 mt-40 absolute">Inspired Articles</h2>
                        <img src={artbg} alt="artical"
                            className="w-210 mt-30 ml-30" />

                        <p className="text-[#767575] text-[18px] ml-30 mt-[-130px]">Modern postural yoga consists largely but not exclusively of the <br /> practice of asanas. There were very few standing asanas before <br /> 1900. By 2012, there were at least 19 widespread styles.
                        </p>





                        <div className="grid grid-cols-2  gap-15 mt-15 w-[39%]">
                            {loading ? (
                                <p className="text-center text-lg">Loading posts...</p>
                            ) : posts.length === 0 ? (
                                <p className="text-center text-lg text-red-500">
                                    No posts found from API
                                </p>
                            ) : (
                                posts.map((post) => (

                                    <div className=" text-[18px] text-[#6F948D] ml-30">
                                        <h6><Link to={`/yogatherapy/${post.id}`} className="text-[#227179] flex  gap-4 "><SlBookOpen />{post.title3}</Link></h6>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
                <h2 className=" absolute text-[#d7d7d7] font-semibold mt-[-75px] ml-31 w-2">_______</h2>
            </section>

            <div className="relative">
                <img src={test} alt="" className="absolute top-[-40px] overflow-hidden " />
                <Testiminol />
            </div>
            <div className={`${classes.endc} relative mt-30 overflow-hidden`}>
                <img src={endcircle} alt="circle"
                    className="m-auto " />
                <div className="mt-[-320px] ml-183 absolute">
                    <img src={circleuper} alt="logo"
                        className=" w-16"
                    />
                    <h2 className="text-[#227179] text-[45px] mt-[60px] ml-[-225px] font-semibold">Subscribe to our newsletter</h2>
                    <p className="m-5 text-[#767575] text-[18px] ml-[-140px]">Get updates for new classes and new products</p>
                </div>
            </div>
            <div className={`${classes.end}`}>
                <form className='absolute flex inset-0 items-start justify-center mt-15 '>
                    <IoIosSend className='text-[24px] mr-104 mt-5    absolute text-[#515151]' />
                    <input type="email" className='email' placeholder='Your Email Address' />
                    <button className='text-[12px] font-bold px-[48px] py-[20px] text-white 
                        bg-[#3CC3A9] rounded-[34px] transition duration-300 transform ml-[-55px]'>SUBSCRIBE</button>
                </form>
            </div>

        </>
    );
}
