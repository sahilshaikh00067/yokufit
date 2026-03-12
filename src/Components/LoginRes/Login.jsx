import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "sahil@gmail.com" && password === "123456") {
      localStorage.setItem("user", true);
      navigate("/");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a7070] to-[#0f3b3b]">

      {/* Floating Particles */}
      <div className="absolute animate-ping w-44 h-44 bg-teal-300 rounded-full opacity-20 top-10 left-10"></div>
      <div className="absolute animate-pulse w-64 h-64 bg-teal-200 rounded-full opacity-10 bottom-32 right-24"></div>
      <div className="absolute animate-bounce w-56 h-56 bg-white/25 rounded-full blur-2xl left-[20%] bottom-10"></div>

      {/* Glass form */}
      <form
        onSubmit={handleLogin}
        className={`backdrop-blur-xl bg-white/20 shadow-2xl border border-white/30 p-10 rounded-2xl w-[350px] transform transition-all duration-700 
          ${animate ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"}`}
      >
        {/* Title */}
        <h2 className="text-3xl text-center mb-8 font-bold text-white tracking-wide drop-shadow-md">
          Welcome Back 👋
        </h2>

        {/* Email Input */}
        <input
          type="email"
          placeholder="Enter Your Email"
          className="border outline-none w-full p-3 mb-6 rounded-lg bg-white/20 text-white placeholder-gray-300
            focus:ring-4 focus:ring-teal-400 focus:border-teal-300 transition-all duration-300"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Password Input */}
        <input
          type="password"
          placeholder="Enter Your Password"
          className="border outline-none w-full p-3 mb-6 rounded-lg bg-white/20 text-white placeholder-gray-300
            focus:ring-4 focus:ring-pink-400 focus:border-pink-300 transition-all duration-300"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#14b8a6] to-[#0ea5e9] text-white p-3 rounded-lg font-semibold
            shadow-[0_10px_30px_rgba(20,200,200,0.4)] hover:scale-105 active:scale-95 transition-all duration-300"
        >
          Login
        </button>

        {/* Register Link */}
        <p className="text-center mt-6 text-gray-200 text-sm">
          Don't have an account?{" "}
          <Link to="/register" className="text-teal-300 font-semibold hover:underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}
