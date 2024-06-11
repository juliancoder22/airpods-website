import { Fade } from "react-awesome-reveal";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center py-10 px-10 md:px-60 gap-10 md:gap-0">
      <Fade direction="up" triggerOnce duration={1500}>
        <span className="font-semibold text-xl tracking-widest">Airpods</span>
      </Fade>
      <Fade direction="up" triggerOnce duration={1500}>
        <ul className="flex justify-center items-center gap-5">
          <li className="cursor-pointer font-semibold text-sm">
            Privacy Policy
          </li>
          <li className="cursor-pointer font-semibold text-sm">
            Terms & Conditions
          </li>
          <li className="cursor-pointer font-semibold text-sm">Support</li>
        </ul>
        <span>Copyright © 2024 | All Rights Reserved</span>
      </Fade>
    </footer>
  );
};

export default Footer;
