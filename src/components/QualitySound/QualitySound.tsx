import AirpodsQuality from "../../assets/airpods-quality.png";
import AirpodsQualityBackground from "../../assets/airpods-quality-background.svg";

const QualitySound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-slate-900">
      <h1 className="text-slate-100 text-5xl font-bold">
        Trendy designs with <br /> better sound quality.
      </h1>
      <p className="text-slate-300 text-lg text-center mt-8">
        We share common trends and strategies for <br /> improving your rental
        income
      </p>
      <div className="flex justify-center gap-10 mt-10">
        <img src={AirpodsQuality} alt="Airpod Back" className="w-full" />
      </div>
      <img src={AirpodsQualityBackground} className="absolute mt-80" />
    </div>
  );
};

export default QualitySound;
