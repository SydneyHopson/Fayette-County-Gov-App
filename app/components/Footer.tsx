import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0E3869] text-[#FFD700] py-6 text-center">
      <div className="max-w-5xl mx-auto px-4">
        <p className="text-lg font-semibold">Fayette County Government</p>

        {/* 🔹 Phone Number */}
        <p className="text-sm mt-1">
          100 North Court Street, Fayetteville, WV 25840 | 
          <span className="inline-block"> Phone: 
            <a href="tel:3045744290" className="text-[#FFD700] hover:text-white transition-colors"> (304) 574-4290</a>
          </span>
        </p>

        {/* 🔹 Social Media Icons */}
        <div className="flex justify-center items-center mt-4 space-x-6">
          <a 
            href="https://www.facebook.com/FayetteCounty" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#FFD700] hover:text-white transition-colors"
          >
            <FaFacebook size={24} />
          </a>
          <a 
            href="https://www.instagram.com/FayetteCounty" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#FFD700] hover:text-white transition-colors"
          >
            <FaInstagram size={24} />
          </a>
        </div>

        {/* 🔹 Copyright */}
        <p className="text-xs mt-4 opacity-80">
          &copy; 2025 Fayette County, West Virginia. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
