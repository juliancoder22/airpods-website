import AirpodsInfoImg from "../../assets/airpods-info.svg";
import AirpodsIcon from "../../assets/airpodsIcon.svg";
import SoundIcon from "../../assets/sound.svg";
import { Fade } from "react-awesome-reveal";

const AirpodsInfo = () => {
  return (
    <div className="flex bg-slate-100 section min-h-screen md:min-h-min">
      {/* División para la imagen */}
      <div className="hidden md:block">
        <img src={AirpodsInfoImg} alt="" />
      </div>
      {/* Contenido de texto */}
      <Fade direction="down" triggerOnce duration={2000}>
        <div className="flex flex-col p-4 lg:ml-32">
          <h2 className="text-5xl font-bold mt-40 ">
            Listen music <br /> anytime, anywhere.
          </h2>
          <p className="text-lg mt-10">
            We share common trends and strategies for{" "}
            <br className="hidden md:block" />
            improving your rental income.
          </p>
          <div className="flex gap-20">
            <div className="flex flex-col mt-10 md:mt-40 md:flex-row ">
              <div className="flex mr-4 justify-start items-start">
                <img
                  src={AirpodsIcon}
                  alt="airpods icon"
                  className="pt-2 pb-2 md:pb-0"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold text-lg">Comfortable Buds</h3>
                <p className="font-light pt-2 text-sm md:pt-6 md:text-lg">
                  With lots of unique blocks,
                  <br /> you can easily build a page <br /> without coding.
                </p>
              </div>
            </div>
            <div className="flex flex-col mt-10 md:mt-40 md:flex-row">
              <div className="flex mr-4 justify-start items-start">
                <img
                  src={SoundIcon}
                  alt="airpods icon"
                  className="pt-2 pb-2 md:pb-0"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold text-lg">Comfortable Buds</h3>
                <p className="font-light pt-2 text-sm md:pt-6 md:text-lg">
                  With lots of unique blocks,
                  <br /> you can easily build a page <br /> without coding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default AirpodsInfo;
