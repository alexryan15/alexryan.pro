import React from "react";
import SocialItem from "./SocialItem";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import "./SocialItems.css";

const SocialItems = () => {
  return (
    <div className="social-items">
      {/* Github */}
      <SocialItem
        link="https://github.com/alexryan15"
        image={<FaGithub size={28} />}
      />
      {/* LinkedIn */}
      <SocialItem
        link="https://www.linkedin.com/in/alex-ryan-1a2a29190/"
        image={<FaLinkedinIn size={28} />}
      />
      {/* Email */}
      <SocialItem
        link="mailto:alexryan1717@hotmail.com"
        image={<AiOutlineMail size={28} />}
      />
      {/* Resume */}
      <SocialItem
        link="https://drive.google.com/file/d/12pcb294gDR6UqCz_ErOG3i3gML8_JDy_/view?usp=sharing"
        image={<BsFillPersonLinesFill size={28} />}
      />
    </div>
  );
};

export default SocialItems;
