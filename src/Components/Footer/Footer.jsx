import { motion } from "framer-motion";
import footerlogo from '../../assets/Images/footerlogo.png';
import { FaFacebookF, FaLinkedinIn, FaPinterest } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';
import { IoLogoInstagram } from 'react-icons/io';
import { IoCallOutline } from 'react-icons/io5';
import { MdOutlineMailOutline } from 'react-icons/md';

const Footer = () => {
  return (
    <>
      <style>{`
        /* ============================
           BASE FOOTER STYLES (UNCHANGED)
        ============================ */
        footer {
          background: #212121;
          color: #fff;
          font-family: 'Jost', sans-serif;
          font-size: 16px;
          padding: 60px 20px;
        }
        footer .grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 30px;
          border-bottom: 1px solid #444;
          padding-bottom: 40px;
          text-align: center;
        }
        footer img {
          height: 40px;
          width: auto;
        }
        footer p {
          margin: 10px 0;
          line-height: 1.6;
        }
        footer a {
          text-decoration: none;
          color: #8fbab3;
          transition: color 0.3s ease;
        }
        footer a:hover {
          color: #fff;
        }
        footer h3 {
          font-size: 22px;
          margin-bottom: 10px;
          color: #fff;
        }
        .footer-bottom {
          background: #000;
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 15px;
          font-size: 15px;
        }
        .footer-bottom p {
          color: #ccc;
          margin: 0;
        }
        .footer-social {
          display: flex;
          gap: 15px;
          font-size: 20px;
        }
        .footer-social a {
          color: #8fbab3;
          transition: color 0.3s ease;
        }
        .footer-social a:hover {
          color: #fff;
        }

        /* ============================
           RESPONSIVE MEDIA QUERIES
        ============================ */

        /* Large Screens (≥1280px) */
        @media (min-width: 1280px) {
          footer { padding: 100px 160px; }
          footer .grid { grid-template-columns: repeat(3, 1fr); gap: 60px; text-align: left; }
          .footer-bottom { flex-direction: row; justify-content: space-between; padding: 30px 160px; font-size: 17px; }
        }

        /* Laptops (1024px–1279px) */
        @media (min-width: 1024px) and (max-width: 1279px) {
          footer { padding: 80px 100px; }
          footer .grid { grid-template-columns: repeat(3, 1fr); gap: 50px; text-align: left; }
          .footer-bottom { flex-direction: row; justify-content: space-between; padding: 25px 100px; font-size: 16px; }
        }

        /* Tablets (768px–1023px) */
        @media (min-width: 768px) and (max-width: 1023px) {
          footer { padding: 60px 40px; }
          footer .grid { grid-template-columns: repeat(2, 1fr); gap: 40px; text-align: left; }
          .footer-bottom { flex-direction: row; justify-content: space-between; padding: 20px 40px; }
          .footer-social { justify-content: flex-end; }
        }

        /* Mobile Landscape (481px–767px) */
        @media (min-width: 481px) and (max-width: 767px) {
          footer { padding: 45px 25px; }
          footer .grid { grid-template-columns: 1fr; gap: 40px; text-align: center; }
          .footer-bottom { flex-direction: column; align-items: center; gap: 15px; padding: 25px; text-align: center; }
          .footer-social { justify-content: center; gap: 12px; font-size: 18px; }
          footer img { height: 35px; }
        }

        /* Mobile Portrait (≤480px) */
        @media (max-width: 480px) {
          footer { padding: 25px 15px; font-size: 14px; }
          footer .grid { grid-template-columns: 1fr; gap: 30px; text-align: center; }
          footer h3 { font-size: 18px; }
          footer p { font-size: 14px; line-height: 1.5; }
          .footer-bottom { font-size: 13px; padding: 20px 10px; gap: 10px; }
          .footer-social { font-size: 18px; gap: 10px; justify-content: center; }
          footer img { height: 32px; }
        }

        /* Extra Small Devices (≤360px) */
        @media (max-width: 360px) {
          footer { font-size: 13px; padding: 20px 10px; }
          footer h3 { font-size: 16px; }
          footer p { font-size: 13px; }
          .footer-social { font-size: 16px; gap: 8px; }
        }
      `}</style>

      {/* ---------- Footer Content ---------- */}
      <footer>
        <motion.div
          className="grid"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.3 } },
          }}
          viewport={{ once: true }}
        >
          {/* Logo Section */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="footer-logo">
              <motion.img
                src={footerlogo}
                alt="Logo"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              />
            </div>
            <p style={{ color: "#ccc", marginTop: "20px" }}>
              Far far away, behind the word mountains, far from countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="footer-links"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div>
              <h3>Quick Links</h3>
              <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }} className="flex flex-col gap-3">
                {["Pricing", "Courses", "FAQ", "Terms of Service"].map((item, i) => (
                  <motion.li key={i} whileHover={{ x: 8, color: "#fff" }} transition={{ duration: 0.3 }}>
                    <a href="#">{item}</a>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <ul style={{ listStyle: "none", padding: 0, marginTop: "55px" }} className="flex flex-col gap-3">
                {["Become Instructor", "Contact Us", "Privacy Policy", "Support Center"].map((item, i) => (
                  <motion.li key={i} whileHover={{ x: 8, color: "#fff" }} transition={{ duration: 0.3 }}>
                    <a href="#">{item}</a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="footer-contact"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3>Contact Info</h3>
            <p style={{ color: "#ccc", marginTop: "20px" }}>
              1810 Kings Way<br />
              King Street, 5th Avenue, New York
            </p>
            <p style={{ color: "#88A4A7", display: "flex", alignItems: "center", gap: "8px" }}>
              <IoCallOutline /> 1800-2355-2356
            </p>
            <p style={{ color: "#88A4A7", display: "flex", alignItems: "center", gap: "8px" }}>
              <MdOutlineMailOutline /> contact@yokuyoga.co
            </p>
          </motion.div>
        </motion.div>
      </footer>

      {/* ---------- Footer Bottom ---------- */}
      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.p whileHover={{ scale: 1.05, color: "#3DBCA8" }} transition={{ duration: 0.3 }}>
          © 2025 GoodLayers. Copy Right By Sahil Shaikh
        </motion.p>

        <motion.div
          className="footer-social"
          initial="hidden"
          whileInView="visible"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          viewport={{ once: true }}
        >
          {[
            { icon: <FaFacebookF />, link: "https://www.facebook.com" },
            { icon: <FaLinkedinIn />, link: "https://www.linkedin.com" },
            { icon: <FaPinterest />, link: "https://www.pinterest.com" },
            { icon: <RiTwitterXFill />, link: "https://twitter.com" },
            { icon: <IoLogoInstagram />, link: "https://www.instagram.com" },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.3, color: "#3DBCA8", rotate: [0, -8, 8, 0] }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Footer;
