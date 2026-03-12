import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from '../Hero/Offline.module.css';
import { motion } from "framer-motion";


const API_BASE = "https://yokufit.onrender.com/api";

export default function Blog() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const res = await fetch(`${API_BASE}/articles/`);
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const data = await res.json();
                setArticles(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchArticles();
    }, []);

    if (loading) return <div className="text-center py-10">Loading...</div>;
    if (error) return <div className="text-center text-red-500">Error: {error}</div>;

    return (
        <>
            <div className={classes.off}>
                <motion.h1
                    className="text-[59px] font-semibold text-[#227179] text-center "
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1,
                        ease: "easeOut",
                    }}
                    viewport={{ once: true }}

                >
                    Blog
                </motion.h1>

                <motion.p
                    className="text-[24px] text-[#547670] text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1,
                        delay: 0.3, // staggered reveal after title
                        ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                >
                    Caption aligned here
                </motion.p>
            </div>



            <div className="bg-gray-50 min-h-screen py-10 px-6 md:px-20">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-25 mt-7"
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                        visible: { transition: { staggerChildren: 0.2 } },
                    }}
                    viewport={{ once: true }}
                >
                    {/* LEFT SIDE - Blog Posts */}
                    <motion.div
                        className="md:col-span-2 space-y-10  "
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        {articles.map((article, index) => (
                            <motion.div
                                key={article.id}
                                className="bg-white  shadow-md overflow-hidden"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.9,
                                    delay: index * 0.1,
                                    ease: "easeOut",
                                }}
                                viewport={{ once: true }}
                                whileHover={{
                                    scale: 1.01,
                                    boxShadow: "0px 8px 30px rgba(61,188,168,0.15)",
                                }}
                            >
                                {/* Image (No animation here) */}
                                {article.image1 && (
                                    <div className="relative overflow-hidden group">
                                        <img
                                            src={`https://yokufit.onrender.com${article.image1}`}
                                            alt={article.title1}
                                            className="w-full h-[357px] object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        {/* Black overlay on hover */}
                                        <div className="absolute inset-0 bg-[black] bg-opacity-40 opacity-0 group-hover:opacity-55 transition-opacity duration-500"></div>
                                    </div>
                                )}

                                {/* Blog Content */}
                                <motion.div
                                    className="p-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                >
                                    <motion.div
                                        className="inline-block bg-[#EFEFEF] text-[#3DBCA8] text-sm px-7 font-semibold py-4 rounded-full absolute mt-[-50px] ml-10"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        {article.date || "July 31, 2020"}
                                    </motion.div>

                                    <p className="text-gray-500 text-sm mt-6 pl-5 pb-4">
                                        {article.author || "James Smith"} ·{" "}
                                        <span className="italic">
                                            {article.category || "breathing, yoga"}
                                        </span>
                                    </p>

                                    <motion.h2
                                        className="text-4xl font-semibold text-[#227179] mb-8 pl-5"
                                        whileHover={{ color: "#3DBCA8", scale: 1.02 }}
                                    >
                                        <Link to={`/blog/${article.id}`}>{article.title1}</Link>
                                    </motion.h2>

                                    <motion.p
                                        className="text-[#547670] mb-12 pl-5"
                                        whileInView={{ opacity: 1, y: 0 }}
                                        initial={{ opacity: 0, y: 15 }}
                                        transition={{ duration: 0.7 }}
                                    >
                                        {article.description1}
                                    </motion.p>

                                    <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
                                        <Link
                                            to={`/blog/${article.id}`}
                                            className="text-[#227179] font-semibold pl-5"
                                        >
                                            Read More →
                                        </Link>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* RIGHT SIDE - Sidebar */}
                    <motion.div
                        className=""
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        {/* Text Widget */}
                        <motion.div
                            className="bg-white p-5"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h4 className="text-lg font-bold">Text Widget</h4>
                            <p className="text-gray-600 text-[14px] font-semibold pt-8">
                                A wonderful serenity has taken possession of my entire soul, like
                                these sweet mornings of spring which I enjoy with my whole heart.
                            </p>

                            {/* Recent Articles */}
                            <div className="bg-white">
                                <h4 className="text-lg font-bold pt-15">Recent Articles</h4>
                                <div className="space-y-9 pt-10">
                                    {articles.slice(0, 3).map((article, i) => (
                                        <motion.div
                                            key={article.id}
                                            className="flex flex-wrap gap-8 items-center"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.8, delay: i * 0.2 }}
                                            viewport={{ once: true }}
                                        >
                                            {article.image1 && (
                                                <img
                                                    src={`https://yokufit.onrender.com${article.image1}`}
                                                    alt={article.title1}
                                                    className="w-20 h-20 object-cover"
                                                />
                                            )}
                                            <div>
                                                <Link
                                                    to={`/blog/${article.id}`}
                                                    className="text-[18px] font-bold text-gray-800 hover:text-[#3DBCA8]"
                                                >
                                                    {article.title1}
                                                </Link>
                                                <p className="text-xs text-gray-500 pt-2">
                                                    {article.date || "July 31, 2020"} ·{" "}
                                                    {article.author || "James Smith"}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Tag Cloud */}
                            <motion.div
                                className="bg-white"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true }}
                            >
                                <h4 className="text-lg font-bold mb-3 pt-15">Tag Cloud</h4>
                                <div className="flex flex-wrap gap-4 pt-5">
                                    {["BREATHING", "HEALTH", "MANTRA", "MEDITATION", "MENTAL", "MIND", "YOGA"].map((tag, i) => (
                                        <motion.span
                                            key={i}
                                            className="bg-[#547670] text-white px-5 py-1 text-[14px] font-semibold"
                                            whileHover={{
                                                scale: 1.1,
                                                backgroundColor: "#3DBCA8",
                                                transition: { duration: 0.3 },
                                            }}
                                        >
                                            {tag}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Post Category */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true }}
                            >
                                <h4 className="text-lg font-bold pt-15">Post Category</h4>
                                {["Artical", "Blog", "Health", "Uncatergorized"].map((cat, i) => (
                                    <motion.p
                                        key={i}
                                        className="border-b border-gray-200 py-4 hover:text-[#3DBCA8] cursor-pointer"
                                        whileHover={{ x: 8 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {cat}
                                    </motion.p>
                                ))}
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </>
    );
}
