import Image from "next/image";
import React from "react";
// import logo from "../../public/image.png"
import logo from "@/assets/images/logo.png";
// import icon from "@/assets/images/icons.png";
import iconca from "@/assets/images/Icons.png"

const Navbar = () => {
  return (
    <div className="container mx-auto w-10/12 flex justify-between items-center py-4">
      <div className="logo">
        <Image src={logo} alt="logo" width={46} height={200} />
      </div>
      <ul className="flex justify-between items-center gap-4">
        <li>HOME</li>
        <li>ELECTRONICS</li>
        <li>BLOG</li>
        <li>PAGES</li>
        <li>Contact</li>
      </ul>

      <div>
        <Image src={iconca} alt="iconca" width={130} height={56} />
      </div>
    </div>
  );
};

export default Navbar;
