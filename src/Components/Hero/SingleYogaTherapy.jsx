import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { IoMail } from "react-icons/io5";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoInstagram, IoLogoTwitter } from "react-icons/io";
import classes from '../Hero/Offline.module.css'
import lastartical from '../../assets/Images/lastartical.jpg';
import { IoIosSend } from "react-icons/io";
import dot from '../../assets/Images/dot.png'
import { motion } from "framer-motion"





// ✅ Define your API base
const API_BASE = "http://yokufit.onrender.com/api";

const SingleYogaTherapy = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeTab, setActiveTab] = useState("overview");

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await fetch(`${API_BASE}/posts/${id}/`);
                if (!res.ok) throw new Error('Failed to fetch post');
                const data = await res.json();
                setPost(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchPost();
    }, [id]);


    if (loading) return <div className="text-center py-10 text-lg">Loading...</div>;
    if (error) return <div className="text-center py-10 text-red-500">Error: {error}</div>;
    if (!post) return <div className="text-center py-10 text-gray-500">No post found</div>;

    return (
        <>

            <div className={classes.off}>
                {/* Title Animation */}
                <motion.h1
                    className="text-[59px] font-semibold text-[#227179] text-center pt-65"
                    initial={{ opacity: 0, y: 50 }}          // Start invisible & slightly down
                    whileInView={{ opacity: 1, y: 0 }}       // Fade in + slide up
                    transition={{
                        duration: 1.2,                         // Smooth timing
                        ease: "easeOut",
                    }}
                    viewport={{ once: true }}                // Runs once when visible
                >
                    {post.title3}
                </motion.h1>

                {/* Subtitle Animation */}
                <motion.p
                    className="text-[21px] text-[#34bda8] text-center"
                    initial={{ opacity: 0, y: 30 }}          // Subtle offset
                    whileInView={{ opacity: 1, y: 0 }}       // Smooth fade-in
                    transition={{
                        duration: 1.4,
                        ease: "easeOut",
                        delay: 0.3,                            // Slight delay after title
                    }}
                    viewport={{ once: true }}
                >
                    Learn how to breathe
                </motion.p>
            </div>


            <div className="">
                <div className="">
                    {post.image3 && (
                        <img
                            src={`http://yokufit.onrender.com${post.image3}`}
                            alt={post.title}
                            className=""
                        />
                    )}

                </div>

                <div className={` left`}>
                    <h1 className=' max-w-3xl mx-auto text-[32px] font-semibold pt-15'>Introduction</h1>
                    <h2 className="max-w-3xl mx-auto text-[15px] text-[#4B4B4B] pt-4">{post.introduction3}</h2>
                    <p className='max-w-3xl mx-auto text-[25px] text-black text-left pt-12'>Improve the quality of your mind</p>
                    <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">{post.paragraphs3}</p>


                    {post.image4 && (
                        <img
                            src={`http://yokufit.onrender.com${post.image4}`}
                            alt={post.title}
                            className="h-180 w-full pt-25 relative"
                        />
                    )}

                    <div className="max-w-4xl mx-auto p-20 text-left relative">
                        <img
                            src={dot}
                            alt="dot"
                            className=" mt-[-650px] p-20"  // centers image horizontally
                        />
                        <p className="mt-[2px] text-white text-[22px] leading-relaxed">
                            Modern yoga consists of a range of techniques including asanas and meditation derived from some of the philosophies,
                            teachings and practices of the Yoga school, which is one of the six schools of traditional Hindu philosophies,
                            and organised into a wide variety of schools and denominations.
                        </p>

                    </div>

                    <p className='max-w-3xl mx-auto text-[25px] text-black text-left pt-1'>Is this program for you?</p>
                    <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed pt-5 pb-25">{post.paragraphs3}</p>
                </div>




                <div className={`${classes.lst}`}>
                    <div className='absolute inset-0 justify-center items-center mt-22'>
                        <h3 className='text-[45px] text-[#227179] font-semibold text-center'>Subscribe to our newsletter</h3>
                        <p className=" mt-3 text-[#878787] font-semibold text-center" >Get updates for new classes and new products
                        </p>
                    </div>

                    <form className='absolute flex inset-0 items-center justify-center mt-30'>
                        <IoIosSend className='absolute ml-[-175px] mr-[165px] text-[22px] text-[#9b9b9b]' />
                        <input type="email" class='email' placeholder='Your Email Address' className=' bg-white px-[65px] py-[20px] rounded-[34px] ' />
                        <button className='text-[12px] font-bold px-[38px] py-[22px] text-[#9b9b9b] 
                         bg-[#547670] rounded-[34px] transition duration-300 transform ml-[-55px] '>
                            SUBSCRIBE</button>
                    </form>
                </div>

            </div>
        </>
    );
};

export default SingleYogaTherapy;
