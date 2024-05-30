import AirpodsInfoImg from "../../assets/airpods-info.svg";
import AirpodsIcon from "../../assets/airpodsIcon.svg";
import SoundIcon from "../../assets/sound.svg";

const AirpodsInfo = () => {
  return (
    <div className="flex bg-slate-100">
      <div className="">
        <img src={AirpodsInfoImg} alt="" />
      </div>
      <div className="flex flex-col ml-32">
        <h2 className="text-5xl font-bold mt-40 ">
          Listen music <br /> anytime, anywhere.
        </h2>
        <p className="text-lg mt-10">
          We share common trends and strategies for <br />
          improving your rental income.
        </p>
        <div className="flex gap-20">
          <div className="flex mt-40">
            <div className="flex mr-4 justify-start items-start">
              <img src={AirpodsIcon} alt="airpods icon" className="pt-2" />
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold text-lg">Comfortable Buds</h3>
              <p className="text-lg font-light pt-6">
                With lots of unique blocks,
                <br /> you can easily build a page <br /> without coding.
              </p>
            </div>
          </div>
          <div className="flex mt-40">
            <div className="flex mr-4 justify-start items-start">
              <img src={SoundIcon} alt="airpods icon" className="pt-2" />
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold text-lg">Comfortable Buds</h3>
              <p className="text-lg font-light pt-6">
                With lots of unique blocks,
                <br /> you can easily build a page <br /> without coding.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirpodsInfo;
