import React from "react";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiOutlineGithub,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Sopziake All rights reserved.</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
        <AiOutlineGithub onClick={()=>window.open("https://github.com/Nikto8962", "_blank")} />
      </p>
    </div>
  );
};

export default Footer;
