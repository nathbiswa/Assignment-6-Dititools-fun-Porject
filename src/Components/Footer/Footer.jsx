import React from "react";
import { CiYoutube } from "react-icons/ci";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#101727]">
      <div className="container mx-auto py-14 text-white ">
        <div className="flex flex-wrap gap-3 justify-between items-center">
          <div className="flex-1 space-y-5">
            <h1 className="text-5xl font-bold">Digitools</h1>
            <p>
              remium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>
          <div className="flex-1 space-y-4">
            <ul className="space-y-2">
                <h1 className="font-bold text-2xl">Product</h1>
              <li>Features</li>
              <li>Pricing</li>
              <li>Templates</li>
              <li>Integrations</li>
            </ul>
          </div>
          <div className="flex-1 space-y-4">
            <ul className="space-y-2">
                <h1 className="font-bold text-2xl">Company</h1>
              <li>About</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="flex-1 space-y-4">
            <ul className="space-y-2">
                <h1 className="font-bold text-2xl">Resources</h1>
              <li>Documentation</li>
              <li>Help Center</li>
              <li>Community</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="flex-1 relative space-y-4">
            <h1 className="font-bold text-2xl absolute -top-17">Social Links</h1>
            <ul className="flex items-center gap-2">
              <li><CiYoutube /></li>
              <li><FaFacebook /></li>
              <li><FaInstagram /></li>
            </ul>
          </div>
          
        </div>

       <div className="border-b border-gray-600 mt-10 mb-3"></div>

        <p className="flex justify-between items-c text-gray-400 text-center">
          <span>&copy; 2026 Digitools. All rights reserved.</span>
          <span>
            <ul className="flex gap-4 items-center">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookies</li>
            </ul>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
