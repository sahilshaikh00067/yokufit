import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("All fields are required!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const newUser = { name, email, password };
    localStorage.setItem("registeredUser", JSON.stringify(newUser));

    alert("Registration Successful! Please Login.");

    navigate("/login");
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-bl from-[#0a4f50] to-[#0b2b2c]">

      {/* Floating Circles */}
      <div className="absolute animate-pulse w-60 h-60 bg-white/15 rounded-full blur-3xl top-20 left-[10%]"></div>
      <div className="absolute animate-ping w-80 h-80 bg-teal-400/30 rounded-full blur-2xl bottom-12 right-[15%]"></div>

      {/* Glass Register Form */}
      <form
        onSubmit={handleRegister}
        className={`backdrop-blur-xl bg-white/20 shadow-2xl border border-white/30 p-10 rounded-2xl w-[380px] transform transition-all duration-700 
          ${animate ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"}`}
      >
        <h2 className="text-3xl text-center mb-8 font-bold text-teal-300 tracking-wide drop-shadow-md">
          Create Account ✨
        </h2>

        {/* Name */}
        <input
          type="text"
          placeholder="Full Name"
          className="border outline-none w-full p-3 mb-5 rounded-lg bg-white/20 text-white placeholder-gray-300
            focus:ring-4 focus:ring-teal-300 transition-all duration-300"
          onChange={(e) => setName(e.target.value)}
          required
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email Address"
          className="border outline-none w-full p-3 mb-5 rounded-lg bg-white/20 text-white placeholder-gray-300
            focus:ring-4 focus:ring-teal-300 transition-all duration-300"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Create Password"
          className="border outline-none w-full p-3 mb-5 rounded-lg bg-white/20 text-white placeholder-gray-300
            focus:ring-4 focus:ring-pink-300 transition-all duration-300"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* Confirm Password */}
        <input
          type="password"
          placeholder="Confirm Password"
          className="border outline-none w-full p-3 mb-8 rounded-lg bg-white/20 text-white placeholder-gray-300
            focus:ring-4 focus:ring-pink-300 transition-all duration-300"
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        {/* Register Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#14b8a6] to-[#0ea5e9] text-white p-3 rounded-lg font-semibold 
            shadow-[0_10px_25px_rgba(0,200,200,0.4)] hover:scale-105 active:scale-95 transition-all duration-300"
        >
          Register
        </button>

        {/* Login Link */}
        <p className="text-center mt-6 text-gray-300 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-teal-300 font-semibold hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
