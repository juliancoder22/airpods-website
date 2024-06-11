import AirpodsInfoImg from "../../assets/airpods-info.svg";
import AirpodsIcon from "../../assets/airpodsIcon.svg";
import SoundIcon from "../../assets/sound.svg";
import { Fade } from "react-awesome-reveal";

const AirpodsInfo = () => {
  return (
    <div className="flex bg-slate-100 section min-h-screen md:min-h-min">
      <div className="hidden md:block">
        <img src={AirpodsInfoImg} alt="" />
      </div>
      <Fade direction="down" triggerOnce duration={2000}>
        <div className="flex flex-col p-6 lg:ml-32">
          <h2 className="text-center md:text-start text-5xl font-bold mt-40 ">
            Listen music <br /> anytime, anywhere.
          </h2>
          <p className="text-center md:text-start text-lg mt-10">
            Explore the latest innovations and designs from{" "}
            <br className="hidden md:block" />
            the new AirPods.
          </p>
          <div className="flex gap-20">
            <div className="flex flex-col mt-10 md:mt-40 md:flex-row w-1/2 text-center items-center">
              <div className="flex md:mr-4 justify-start items-start">
                <img
                  src={AirpodsIcon}
                  alt="airpods icon"
                  className="pt-2 pb-2 md:pb-0"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold text-lg">Comfortable Buds</h3>
                <p className="font-light pt-2 text-sm md:pt-6 md:text-lg">
                  Experience surround sound,
                  <br /> designed to adapt to your daily life <br /> without
                  complications.
                </p>
              </div>
            </div>
            <div className="flex flex-col mt-10 md:mt-40 md:flex-row w-1/2 text-center items-center">
              <div className="flex md:mr-4 justify-start items-start">
                <img
                  src={SoundIcon}
                  alt="airpods icon"
                  className="pt-2 pb-2 md:pb-0"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold text-lg">Comfortable Buds</h3>
                <p className="font-light pt-2 text-sm md:pt-6 md:text-lg">
                  Enjoy wireless freedom,
                  <br /> with an all-day battery <br /> and fast charging.
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
