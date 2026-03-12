import { useEffect, useState } from 'react';
import classes from '../Hero/Online.module.css';
import { Link } from 'react-router-dom';
import { SlBookOpen } from "react-icons/sl";
import { FaLightbulb } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import { motion } from "framer-motion";


export default function Online() {
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
                    className="text-[59px] font-semibold text-[#227179] text-center"
                    initial={{ opacity: 0, y: 50 }}       // start faded & slightly below
                    whileInView={{ opacity: 1, y: 0 }}    // fade in + slide up
                    transition={{
                        duration: 1.2,                      // smooth, not too fast
                        ease: "easeOut",
                    }}
                >
                    Online Classes
                </motion.h1>
            </div>

            <section className="p-0 bg-white relative">
                <div className="lg:pl-30">
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

                <div className="pb-20">
                    {loading ? (
                        <p className="text-center text-lg">Loading posts...</p>
                    ) : posts.length === 0 ? (
                        <p className="text-center text-lg text-red-500">
                            No posts found from API
                        </p>
                    ) : (
                        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 px-0 sm:px-4 md:px-10 lg:px-15">
                            {posts.map((post) => (
                                <div
                                    key={post.id}
                                    className="flex flex-col items-center relative"
                                >
                                    {/* Image container with hover group */}
                                    <div className="relative overflow-hidden w-full h-full group">
                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 bg-white text-[#547670]
                                            flex justify-center items-center flex-col text-[18px] opacity-0 
                                            group-hover:opacity-80 transition-opacity duration-300 z-10">
                                            <p className="flex gap-2"><SlBookOpen />{post.p1}</p>
                                            <p className="flex gap-2"><LuUsers />{post.p2}</p>
                                            <p className="flex gap-2"><FaLightbulb />{post.p3}</p>
                                        </div>

                                        {/* Image with scale effect */}
                                        <img
                                            src={`https://yokufit.onrender.com${post.image}`}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-115"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="shadow-[1px_2px_25px_rgba(0,0,0,0.1)]  relative  w-full
                                         bg-white p-5 text-left">
                                        <p className="text-sm text-[#a9a9a9]">
                                            <Link to={`/posts/${post.id}`} className="text-[#227179]">
                                                {post.description}
                                            </Link>
                                        </p>
                                        <h3 className="text-xl font-bold mt-2 text-[#227179]">
                                            <Link to={`/posts/${post.id}`} className="text-[#227179]">
                                                {post.title}
                                            </Link>
                                        </h3>
                                        <h4 className="text-[23px] font-bold mt-7 text-[#404B48]">
                                            {post.paragraph}
                                        </h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
