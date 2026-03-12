import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { SlBookOpen } from "react-icons/sl";
import downpost1 from '../../assets/Images/downpost1.png';
import Progress from './Progress';
import { IoMail } from "react-icons/io5";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";
import { motion } from "framer-motion";



const API_BASE = "http://yokufit.onrender.com/api";

export default function SingleDownPost() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeTab, setActiveTab] = useState("overview");


    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await fetch(`${API_BASE}/posts/${id}/`);
                if (!res.ok) throw new Error('Failed to fetch Post');
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

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!post) return <div>No Post found</div>;
    return (
        <>
            <div className="relative w-full max-h-[500px] overflow-hidden">
                <img
                    src={downpost1}
                    alt="about"
                    className="w-full  scale-150 transition-transform duration-500 mb-[90px]"
                />

            </div>
            <div>
                <img
                    src={`http://yokufit.onrender.com${post.image2}`}
                    alt={post.title}
                    className="absolute bottom-40 left-[550px] w-90 h-90 object-cover transition-transform duration-500 rounded-full"
                />
            </div>
            <div className='h-40'></div>

            <div className='grid grid-cols-2 grid-rows-1 p-30'>
                <div>
                    <h2 className='text-[25px] font-bold text-[#383838]'>Skills</h2>

                    <div className='grid grid-cols-2 gap-65 pt-8'>
                        <h4>BREATING</h4>
                        <h4>100%</h4>
                    </div>
                    <div className='pt-5'><Progress value={100} /></div>

                    <div className='grid grid-cols-2 gap-65 pt-8'>
                        <h4>POSES</h4>
                        <h4>85%</h4>
                    </div>
                    <div className='pt-5'><Progress value={85} /></div>

                    <div className='grid grid-cols-2 gap-65 pt-8'>
                        <h4>MEDITATION</h4>
                        <h4>95%</h4>
                    </div>
                    <div className='pt-5'><Progress value={95} /></div>

                    <div className='grid grid-cols-2 gap-65 pt-8'>
                        <h4>STRENGTH</h4>
                        <h4>80%</h4>
                    </div>
                    <div className='pt-5'><Progress value={80} /></div>
                </div>




                <div>
                    {/* Instructor Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <motion.h2
                            className="text-[25px] font-bold"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            {post.titles}
                        </motion.h2>

                        <motion.p
                            className="text-[#7b7b7b] pt-2 pb-5"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            Senior Instructor
                        </motion.p>

                        <motion.p
                            className="text-[17px] text-[#7b7b7b]"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            {post.paragraphs2}
                        </motion.p>
                    </motion.div>

                    {/* Social Icons */}
                    <motion.div
                        className="flex text-[#3dbca8] text-[21px] gap-3 pt-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }}
                    >
                        {[
                            { icon: <IoMail />, link: "mailto:contact@yokuyoga.co" },
                            { icon: <TiSocialFacebook />, link: "https://facebook.com" },
                            { icon: <IoLogoInstagram />, link: "https://instagram.com" },
                            { icon: <IoLogoTwitter />, link: "https://twitter.com" },
                        ].map((item, i) => (
                            <motion.a
                                key={i}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{
                                    scale: 1.4,
                                    rotate: [0, -10, 10, 0],
                                    color: "#227179",
                                }}
                                transition={{ duration: 0.4 }}
                            >
                                {item.icon}
                            </motion.a>
                        ))}
                    </motion.div>
                </div>

            </div>

            <div className='text-[30px] pl-25 font-extrabold'>
                <h2>{post.title2}</h2>
            </div>



<div className="flex flex-wrap justify-left gap-15 m-20">
  {[post.image2, post.image].map((img, i) => (
    <motion.div
      key={i}
      className="bg-white shadow-md overflow-hidden max-w-sm group relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: i * 0.3, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.03,
        y: -5,
        boxShadow: "0px 15px 35px rgba(0,0,0,0.15)",
      }}
    >
      {/* Image Section */}
      {img && (
        <div className="relative overflow-hidden group">
          <motion.img
            src={`http://yokufit.onrender.com${img}`}
            alt={i === 0 ? post.title : post.titles}
            className="w-95 h-[265px] object-cover transition-transform duration-500 group-hover:scale-110"
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          />
          {/* Black overlay on hover */}
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-55 transition-opacity duration-500"
            whileHover={{ opacity: 0.55 }}
          />
        </div>
      )}

      {/* Content Section */}
      <motion.div
        className="p-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <p>
          <Link
            to={`/posts/${post.id}`}
            className="text-teal-600 font-semibold hover:text-[#227179] transition duration-300"
          >
            {post.catergory}
          </Link>
          <span className="pl-11">☆☆☆☆☆</span>
        </p>

        <h3 className="text-[22px] font-bold mt-2">
          {i === 0 ? post.title : post.titles}
        </h3>

        <hr className="border0 border-gray-300 w-full mt-10 mb-7" />

        <p className="mt-2 text-black text-[25px]">{post.paragraph}</p>

        <div className="grid grid-cols-2 font-semibold text-[15px] text-[#A2A2A2] pt-5">
          <p className="flex gap-5 text-[17px]">
            <SlBookOpen />
            {post.p1}
          </p>
        </div>
      </motion.div>
    </motion.div>
  ))}
</div>

        </>
    );
}