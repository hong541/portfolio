import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

const social = [
  { icon: <FaGithub />, link: "https://github.com/hong541" },
  {
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/jabar-maulana-36778a2ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/",
  },
  { icon: <FaTwitter />, link: "https://x.com/Hong_Company" },
  { icon: <FaInstagram />, link: "https://www.instagram.com/hong.company/" },
];
const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {social.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.link}>
            <div className={iconStyles}>{item.icon}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
