import { Fade } from "react-awesome-reveal";
import Airpods1 from "../../assets/airpods-1.svg";
import Airpods2 from "../../assets/airpods-2.svg";
import Airpods3 from "../../assets/airpods-3.svg";
import AirpodsBackground from "../../assets/BGbackground.png";

const Cards = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="h-screen flex flex-col items-center justify-center">
        <Fade direction="down" triggerOnce duration={2000}>
          <h1 className="text-5xl font-bold">Get your airpod now.</h1>
          <p className="text-center font-normal text-lg mt-10">
            We share common trends and strategies for <br /> improving your
            rental income.
          </p>
        </Fade>
        <div className="flex items-center justify-center gap-20 mt-32">
          <Fade direction="left" triggerOnce duration={2000}>
            <div className="flex flex-col items-center gap-8">
              <img src={Airpods1} alt="airpods image" />
              <h2 className="font-bold text-lg">Midnight Green</h2>
              <p className="text-center">
                AirPods (2nd gen) iPhone Colors <br /> with Wireless Charging
                Case
              </p>
              <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-4 px-6 rounded-lg mb-4 text-sm">
                Buy now - $99
              </button>
            </div>
          </Fade>
          <Fade direction="up" triggerOnce duration={2000}>
            <div className="flex flex-col items-center gap-8">
              <img src={Airpods2} alt="airpods image" />
              <h2 className="font-bold text-lg">Silver</h2>
              <p className="text-center">
                AirPods (2nd gen) iPhone Colors <br /> with Wireless Charging
                Case
              </p>
              <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-4 px-6 rounded-lg mb-4 text-sm">
                Buy now - $99
              </button>
            </div>
          </Fade>
          <Fade direction="right" triggerOnce duration={2000}>
            <div className="flex flex-col items-center gap-8">
              <img src={Airpods3} alt="airpods image" />
              <h2 className="font-bold text-lg">Gold</h2>
              <p className="text-center">
                AirPods (2nd gen) iPhone Colors <br /> with Wireless Charging
                Case
              </p>
              <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-4 px-6 rounded-lg mb-4 text-sm ">
                Buy now - $99
              </button>
            </div>
          </Fade>
        </div>
      </div>

      <img src={AirpodsBackground} alt="" className="w-full h-screen" />
    </div>
  );
};

export default Cards;
