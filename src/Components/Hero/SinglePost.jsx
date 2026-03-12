import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import classes from '../Hero/SinglePost.module.css';
import { CiClock1 } from "react-icons/ci";
import { GoBook } from "react-icons/go";
import { TbMessageLanguage } from "react-icons/tb";
import { LuGraduationCap } from "react-icons/lu";
import { BsLightningCharge } from "react-icons/bs";
import { IoFlagOutline } from "react-icons/io5";
import { FaLightbulb } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import { SlBookOpen } from "react-icons/sl";
import { PiFacebookLogo } from "react-icons/pi";
import { ImPinterest2 } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";
import { motion } from "framer-motion";


const API_BASE = "http://yokufit.onrender.com/api";

export default function SinglePost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");

  // Fetch post data
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

  // Razorpay script loader
  const loadRazorpay = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // Razorpay payment handler
  const handlePayment = async () => {
    const res = await loadRazorpay("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      alert("Razorpay SDK failed to load. Please check your internet connection.");
      return;
    }

    const options = {
      key: "rzp_test_1DP5mmOlF5G5ag", // 🔹 Replace with your own Razorpay Test Key ID
      amount: 3900 * 88.77, // ₹39.00 (amount in paise)
      currency: "INR",
      name: "Yoga for Beginners Course",
      description: "Online Yoga Course Payment",
      image: "https://yourwebsite.com/logo.png", // optional logo
      handler: function (response) {
        alert("✅ Payment successful!");
        console.log("Payment ID:", response.razorpay_payment_id);
      },
      prefill: {
        name: "Test User",
        email: "test@example.com",
        contact: "8381845350",
      },
      theme: {
        color: "#3DBCA8",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();

    paymentObject.on("payment.failed", function (response) {
      alert("❌ Payment failed. Please try again.");
      console.error("Payment Failed:", response.error);
    });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!post) return <div>No Post found</div>;

  return (
    <>
      <motion.div
        className={`${classes.backh} relative`}
        transition={{
          duration: 1.2,
          ease: [0.25, 0.1, 0.25, 1],
          type: "spring",
          stiffness: 80,
        }}
      >
        <motion.h1
          className="text-[59px] font-semibold text-[#227179] text-center pt-45"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
        >
          Yoga for Beginners Course
        </motion.h1>

        <motion.p
          className="pt-3 text-[21px] text-[#547670] text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
        >
          Learn the foundations of yoga in this online course
        </motion.p>
      </motion.div>




      <div className='mt-[-60px] relative mb-20'>
        <motion.div
  className="w-330 m-auto bg-white rounded-lg p-18 flex flex-col md:flex-row"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    duration: 1.2,
    type: "spring",
    stiffness: 70,
    damping: 15,
  }}
  viewport={{ once: true }}
>
  {/* LEFT SECTION */}
  <motion.div
    className="flex-1"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{
      duration: 1,
      delay: 0.3,
      type: "spring",
      stiffness: 60,
    }}
  >
    {/* Course Info Header */}
    <motion.div
      className="flex items-center text-gray-500 text-sm mb-4 space-x-27"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.8 }}
    >
      <div className="grid space-x-2">
        <span className="font-semibold text-gray-700">Teacher</span>
        <p>
          <Link to={`/postss/${post.id}`} className="text-teal-600 font-semibold">
            {post.teacher}
          </Link>
        </p>
      </div>
      <div className="grid space-x-2">
        <span className="font-semibold text-gray-700">Category</span>
        <p>
          <Link to="/online" className="text-teal-600 font-semibold">
            {post.catergory}
          </Link>
        </p>
      </div>
      <div className="grid space-x-2">
        <span className="font-semibold text-gray-700">Review</span>
        <span>☆☆☆☆☆ (0/5)</span>
      </div>
      <div className="grid space-x-2">
        <span className="font-semibold text-gray-700">Wishlist</span>
      </div>
    </motion.div>

    {/* Title and Description */}
    <motion.h1
      className="text-4xl font-semibold text-black mt-15 mb-7"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      {post.title}
    </motion.h1>

    <motion.p
      className="text-2xl text-black font-semibold mb-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      Learn the foundations of yoga in this online course
    </motion.p>

    <motion.p
      className="text-[18px] font-sans text-gray-500 mt-6 mb-15"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 1.2 }}
    >
      The practice of yoga has been thought to date back to pre-vedic Indian
      traditions; possibly in the Indus valley civilization around 3000 BCE.
      Yoga is mentioned in the Rigveda and referenced in the Upanishads.
    </motion.p>

    {/* Course Info Icons */}
    <motion.div
      className="grid grid-cols-2 gap-4 text-gray-700 text-[17px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: { transition: { staggerChildren: 0.15 } },
      }}
    >
      {[
        [<CiClock1 />, "Duration", "3 weeks"],
        [<GoBook />, "Lectures", "6"],
        [<TbMessageLanguage />, "Language", "English"],
        [<IoFlagOutline />, "Full", "Lifetime Access"],
        [<LuGraduationCap />, "Skill level", "Intermediate"],
        [<BsLightningCharge />, "Quizzes", "No"],
      ].map(([icon, title, value], i) => (
        <motion.div
          key={i}
          className="flex items-center space-x-2"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          {icon}
          <span>
            <strong>{title}</strong> {value}
          </span>
        </motion.div>
      ))}
    </motion.div>
  </motion.div>

  {/* RIGHT - BUY NOW SECTION */}
  <motion.div
    className="flex-1 max-w-sm bg-white p-6 rounded-xl mr-2 shadow-lg flex flex-col justify-evenly"
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{
      duration: 1,
      delay: 0.5,
      type: "spring",
      stiffness: 70,
    }}
    viewport={{ once: true }}
   
  >
    <motion.div
      className="text-center mb-4"
      animate={{
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <p className="text-6xl font-semibold">{post.paragraph}</p>
    </motion.div>

    <motion.button
      onClick={handlePayment}
      className="bg-[#3DBCA8] text-white font-semibold py-[12px] rounded-[6px]"
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      BUY NOW
    </motion.button>

    <motion.p
      className="text-gray-600 text-center text-[16px]"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.8 }}
    >
      Like yoga, the osteopathic approach to wellness focuses on your body’s
      natural tendency toward health and self-healing.
    </motion.p>
  </motion.div>
</motion.div>

        {/* Tabs Section */}
        <div className="mt-12 mb-10">
          <div className="ml-35 flex justify-left gap-18 border-b w-310 border-gray-200 ">
            {["overview", "curriculum", "instructor", "reviews"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pl-15 uppercase text-sm font-semibold ${activeTab === tab
                  ? "text-teal-600 border-b-2 border-teal-600"
                  : "text-gray-500"
                  } pb-2`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="mt-9 ml-52">
            {activeTab === "overview" && (
              <div>
                <h3 className="text-xl font-semibold mb-2 ">Course Overview</h3>
                <p className='pt-5 text-[#969696]'>{post.overview || post.titles}</p>
                <div className='flex gap-5 text-[#969696] text-[20px]'>
                  <h1 className='text-[#969696] font-extrabold text-[27px]'>SHARE</h1>
                  <PiFacebookLogo />
                  <ImPinterest2 />
                  <BsTwitterX />
                </div>
              </div>
            )}
            {activeTab === "curriculum" && (
              <div>
                <h3 className="text-xl font-semibold mb-2">Curriculum</h3>
                <p>{post.curriculum || "Curriculum details coming soon..."}</p>
              </div>
            )}
            {activeTab === "instructor" && (
              <div>
                <h3 className="text-xl font-semibold mb-2">Instructor</h3>
                <p>{post.teacher_bio || "Instructor details coming soon..."}</p>
              </div>
            )}
            {activeTab === "reviews" && (
              <div>
                <h3 className="text-xl font-semibold mb-2">Reviews</h3>
                <p>No reviews yet. Be the first to review this course!</p>
              </div>
            )}
          </div>
        </div>

        {/* Cards Section (unchanged) */}
        <div className="flex flex-wrap justify-centre gap-15 pl-50">
          <div className="bg-white shadow-md overflow-hidden max-w-sm group relative">
            {post.image2 && (
              <div className="relative overflow-hidden group">
                <img
                  src={`http://yokufit.onrender.com${post.image2}`}
                  alt={post.title}
                  className="w-95 h-[265px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-55 transition-opacity duration-500"></div>
              </div>
            )}
            <div className="p-6">
              <p>
                <Link to={`/postss/${post.id}`} className="text-teal-600 font-semibold">
                  {post.catergory}
                </Link>
                <span className='pl-11'>☆☆☆☆☆</span>
              </p>
              <h3 className="text-[22px] font-bold mt-2">{post.title}</h3>
              <hr className="border0 border-gray-300 w-full mt-10 mb-7" />
              <p className="mt-2 text-black text-[25px]">{post.paragraph}</p>
              <div className='grid grid-cols-2 font-semibold text-[15px] text-[#A2A2A2] pt-5'>
                <p className="flex gap-5 text-[17px]" ><SlBookOpen />{post.p1}</p>
                <p className="flex gap-1 text-[15px]"><LuUsers />{post.p2}</p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-md overflow-hidden max-w-sm group relative">
            {post.image && (
              <div className="relative overflow-hidden group">
                <img
                  src={`http://yokufit.onrender.com${post.image}`}
                  alt={post.titles}
                  className="w-95 h-[265px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-55 transition-opacity duration-500"></div>
              </div>
            )}
            <div className="p-6">
              <p>
                <Link to={`/postss/${post.id}`} className="text-teal-600 font-semibold">
                  {post.catergory}
                </Link>
                <span className='pl-11'>☆☆☆☆☆</span>
              </p>
              <h3 className="text-[22px] font-bold mt-2">{post.titles}</h3>
              <hr className="border0 border-gray-300 w-full mt-10 mb-7" />
              <p className="mt-2 text-black text-[25px]">{post.paragraph}</p>
              <div className='grid grid-cols-2 font-semibold text-[15px] text-[#A2A2A2] pt-5'>
                <p className="flex gap-5 text-[17px]" ><SlBookOpen />{post.p1}</p>
                <p className="flex gap-1 text-[15px]"><LuUsers />{post.p2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
