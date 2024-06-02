import AirPodsImg from "../../assets/airpod-image.svg";
import { Fade } from "react-awesome-reveal";

const Hero = () => {
  return (
    <div className="flex flex-col p-6 items-center justify-center h-screen mb-10">
      <div className="flex flex-col items-center justify-center text-center max-w-full mx-auto mt-6">
        <Fade direction="down" triggerOnce duration={2000}>
          <img src={AirPodsImg} alt="airpods" className="mx-auto mb-4" />
        </Fade>
        <Fade direction="up" triggerOnce duration={2000}>
          <div className="mt-10">
            <span className="text-red-500 font-semibold mt-14 text-sm">
              NON-STOP MUSIC FOR LONG TIME
            </span>
            <h1 className="text-6xl font-bold my-8">
              Sound, that sounds better!
            </h1>
            <p className="text-gray-700 mb-6 mt-4 font-normal text-lg">
              With lots of unique blocks, you can easily build a page without
              coding. <br /> Build your next consultancy website within few
              minutes.
            </p>
            <div className="mb-4">
              <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-4 px-6 rounded-lg mb-4 text-sm">
                Buy now - Starting at $99
              </button>
            </div>
            <div>
              <a
                href="#"
                className="font-semibold no-underline tracking-widest text-sm"
              >
                WATCH IN ACTION
              </a>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Hero;
