import React from "react";
import footer_logo from "../assets/logo_big.png";
import instagram_icon from "../assets/instagram_icon.png";
import pintester_icon from "../assets/pintester_icon.png";
import whatsapp_icon from "../assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="footer flex flex-col justify-center items-center gap-12  pt-4 pb-8">
      <div className="footer-logo flex items-center gap-5">
        <img src={footer_logo} alt="" />
        <p className="text-gray-800 text-[46px] font-semibold">SHOPPER</p>
      </div>
      <ul className="footer-links flex list-none gap-12 text-gray-900 text-[20px]">
        <li className="cursor-pointer ">Company</li>
        <li className="cursor-pointer ">Products</li>
        <li className="cursor-pointer ">Offices</li>
        <li className="cursor-pointer ">About</li>
        <li className="cursor-pointer ">Contact</li>
      </ul>

      <div className="footer-social-icon flex flex-col gap-5 ">
        <div className="flex  items-center justify-center gap-5">
          <div className="footer-icons-container p-2 pb-[6px] bg-gray-50 border border-gray-200 rounded-2xl hover:scale-105 transition duration-600  ">
            <img src={instagram_icon} alt="" />
          </div>

          <div className="footer-icons-container p-2 pb-[6px] bg-gray-50 border border-gray-200 rounded-2xl hover:scale-105 transition duration-600">
            <img src={pintester_icon} alt="" />
          </div>

          <div className="footer-icons-container p-2 pb-[6px] bg-gray-50 border border-gray-200 rounded-2xl hover:scale-105 transition duration-600">
            <img src={whatsapp_icon} alt="" />
          </div>
        </div>
        <div className="footer-copyright flex flex-col items-center gap-7 w-full mb-[30px] text-gray-900 text-[20px]">
          <hr className="w-4/5 border-none rounded-[10px] h-[3px]" />
          <p>Copyright @ 2025 - All Right Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
