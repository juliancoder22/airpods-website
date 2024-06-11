import AirpodsQuality from "../../assets/airpods-quality.png";
import AirpodsQualityBackground from "../../assets/airpods-quality-background.svg";
import { Fade } from "react-awesome-reveal";

const QualitySound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-slate-900 section">
      <Fade direction="down" triggerOnce duration={1500}>
        <h1 className="text-slate-100 text-center text-5xl font-bold">
          Trendy designs with <br /> better sound quality.
        </h1>
        <p className="text-slate-300 text-lg text-center mt-8">
          We share common trends and strategies for <br /> improving your rental
          income
        </p>
      </Fade>
      <Fade direction="up" triggerOnce duration={1500}>
        <div className="flex justify-center gap-10 mt-10">
          <img src={AirpodsQuality} alt="Airpod Back" className="w-full" />
        </div>
      </Fade>
      <img src={AirpodsQualityBackground} className="absolute mt-80" />
    </div>
  );
};

export default QualitySound;
