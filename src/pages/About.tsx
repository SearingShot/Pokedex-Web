import React from "react";
import Wrapper from "../sections/Wrapper";
import avatarImage from "../assets/Heyya.jpg";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function About() {
  return (
    <div className="profile">
      <img src={avatarImage} alt="" className="profile-image" />
      <h1 className="profile-text">Hi, I am Utsav Sharma...</h1>
      <h2 className="profile-text">The Craftsman of this Marvelous Pokedex</h2>
      {/* <h4 className="profile-text">
        This project is created for youtube tutorial for my channel Kishan Sheth
      </h4> */}
      <div className="profile-links">
        <a href="https://github.com/SearingShot">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/utsav-sharma-680aa124a/">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/ishu27sharma/">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
}

export default Wrapper(About);
