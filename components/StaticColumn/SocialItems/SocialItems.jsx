import React from "react";
import SocialItem from "./SocialItem";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const SocialItems = () => {
  return (
    <div className="flex justify-between items-left">
      <SocialItem
        link="https://github.com/alexryan15"
        image={<FaGithub size={28} />}
      />
      <SocialItem
        link="https://www.linkedin.com/in/alex-ryan-1a2a29190/"
        image={<FaLinkedinIn size={28} />}
      />
      <SocialItem
        link="mailto:alexryan1717@hotmail.com"
        image={<AiOutlineMail size={28} />}
      />
      <SocialItem
        link="https://drive.google.com/file/d/15TsNLwST7O1Y9rOk1e0HuScLf3RNH--r/view?usp=sharing"
        image={<BsFillPersonLinesFill size={28} />}
      />
    </div>
  );
};

export default SocialItems;
