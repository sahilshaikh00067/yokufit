import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

const API_BASE = "http://yokufit.onrender.com/api";

export default function SingleBlog() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const res = await fetch(`${API_BASE}/articles/${id}/`);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setArticle(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchArticle();
  }, [id]);

  if (loading)
    return (
      <motion.div
        className="text-center text-[#227179] py-10 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Loading...
      </motion.div>
    );

  if (error)
    return (
      <div className="text-center text-red-500 py-10 text-lg">Error: {error}</div>
    );

  return (
    <div className="bg-gray-50 min-h-screen overflow-hidden">
      {/* Header Section */}
      <motion.div
        className="bg-gray-100 py-50 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-[45px] md:text-[55px] font-bold text-[#227179]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {article.title1}
        </motion.h1>

        <motion.p
          className="text-gray-600 mt-3 text-[16px] md:text-[18px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          By {article.author || "James Smith"} · {article.date || "July 31, 2020"}
        </motion.p>
      </motion.div>

      {/* Main Content Section */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-12">
        {/* Image */}
        {article.image1 && (
          <motion.img
            src={`http://yokufit.onrender.com${article.image1}`}
            alt={article.title1}
            className="w-full h-[320px] md:h-[500px] object-cover rounded-2xl shadow-lg mb-10"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        )}

        {/* Blog Content */}
        <motion.p
          className="text-[#547670] text-[18px] md:text-[20px] mt-20 leading-relaxed mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {article.description1}
        </motion.p>

        {/* Back Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div whileHover={{ scale: 1.08 }} transition={{ duration: 0.3 }}>
            <Link
              to="/blog"
              className="inline-block bg-[#227179] text-white px-8 py-3 rounded-full text-[18px] font-semibold hover:bg-[#3dbca8] transition duration-300"
            >
              ← Back to Blog
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
