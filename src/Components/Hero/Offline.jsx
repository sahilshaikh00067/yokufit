import classes from '../Hero/Offline.module.css'
import mat from '../../assets/Images/mat.png'
import pose1 from '../../assets/Images/pose1.jpg'
import pose2 from '../../assets/Images/pose2.jpg'
import pose3 from '../../assets/Images/pose3.jpg'
import pose4 from '../../assets/Images/pose4.jpg'
import pose5 from '../../assets/Images/pose5.jpg'
import pose6 from '../../assets/Images/pose6.jpg'



import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
import Subscribe from '../Reuse/Subscribe'





export default function Offline() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

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
            <div className={classes.off}>
                <motion.h1
                    className="text-[59px] font-semibold text-[#227179] text-center pt-65"
                    initial={{ opacity: 0, y: 50 }}       // start faded & slightly below
                    whileInView={{ opacity: 1, y: 0 }}    // fade in + slide up
                    transition={{
                        duration: 1.2,                      // smooth, not too fast
                        ease: "easeOut",
                    }}
                >
                    Offline Classes
                </motion.h1>
            </div>

            <div className={classes.off2}>
                <motion.div
                    className="text-center pt-25"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0, y: 40 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 1, staggerChildren: 0.2, ease: "easeOut" },
                        },
                    }}
                >
                    {/* Floating Yoga Mat Image */}
                    <motion.img
                        className="w-[4%] ml-153 mb-[15px]"
                        src={mat}
                        alt="mat"
                        variants={{
                            // hidden: { opacity: 0, y: 20 },
                            // visible: { opacity: 1, y: 0 },
                        }}
                        animate={{ y: [0, -10, 0] }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />

                    {/* Heading */}
                    <motion.h3
                        className="font-semibold text-[#227179] text-[45px] mb-[35px]"
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        Our Classes
                    </motion.h3>

                    {/* Paragraph */}
                    <motion.p
                        className="text-[#878787] font-semibold"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        A meditative means of discovering dysfunctional perception and cognition,
                        as well as overcoming it<br />
                        to release any suffering, find inner peace and salvation.
                    </motion.p>
                </motion.div>
            </div>


            <div className="relative">
                {loading ? (
                    <p className="text-center text-lg">Loading posts...</p>
                ) : posts.length === 0 ? (
                    <p className="text-center text-lg text-red-500">
                        No posts found from API
                    </p>
                ) : (
                    <div className="grid grid-rows-2 pt-12 px-4 lg:px-20 lg:grid-cols-3 sm:p-0 ">
                        {posts.slice(0, 6).map((post) => (
                            <div key={post.id} className="flex flex-col items-center">
                                <img
                                    src={`https://yokufit.onrender.com${post.image2}`}
                                    alt={post.titles}
                                    className="h-120 object-cover"
                                />
                                <h3 className="text-xl font-semibold text-center mt-2 text-[#227179]">
                                    <Link
                                        to={`/posts/${post.id}`}
                                        className="text-[#227179]"
                                    >
                                        {post.titles}
                                    </Link>
                                </h3>
                                <h4 className="text-[17px] pb-9 text-center mt-1 text-[#AFAFAF]">With Jessica Pena
                                </h4>
                            </div>
                        ))}
                    </div>
                )}
            </div>

                <Subscribe/>
        </>
    )


}