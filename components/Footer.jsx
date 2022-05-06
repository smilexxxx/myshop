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
        <AiOutlineGithub href="https://github.com/Nikto8962" />
      </p>
    </div>
  );
};

export default Footer;
