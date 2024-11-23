import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp,  } from "react-icons/fa";

const socialLinks = [
  { href: "https://github.com/indiedev2003", icon: <FaGithub /> },
  { href: "https://instagram.com/gagansuman03", icon: <FaInstagram /> },
  { href: "https://instagram.com/_gagansuman_", icon: <FaInstagram /> },
  { href: "https://linkedin.com/in/gagan-suman", icon: <FaLinkedin /> },
  { href: "https://wa.me/919115117994", icon: <FaWhatsapp /> },
  // { href: "https://wa.me/919115117994", icon: <FaWhatsapp /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          ©Nova 2024. All rights reserved
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="https://github.com/indiedev2003"
          target="_blank"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          Gihtub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
