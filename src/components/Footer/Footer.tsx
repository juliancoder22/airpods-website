import { Fade } from "react-awesome-reveal";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center py-10 px-60">
      <Fade direction="up" triggerOnce duration={1500}>
        <span className="font-semibold text-xl">Airpods Website</span>
      </Fade>
      <Fade direction="up" triggerOnce duration={1500}>
        <ul className="flex justify-center items-center gap-10">
          <li className="cursor-pointer font-semibold">Privacy Policy</li>
          <li className="cursor-pointer font-semibold">Terms & Conditions</li>
          <li className="cursor-pointer font-semibold">Support</li>
        </ul>
      </Fade>
    </footer>
  );
};

export default Footer;
