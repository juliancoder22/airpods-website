import reviewsBackground from "../../assets/reviews-img.png";
import reviewSvg from "../../assets/review.svg";
import { Fade } from "react-awesome-reveal";

const Reviews = () => {
  return (
    <div className="flex h-screen bg-indigo-600 justify-end section">
      <Fade direction="left" triggerOnce duration={2500}>
        <div className="flex flex-col p-60">
          <h1 className="font-bold text-5xl text-slate-50">
            Comfortable buds <br />
            with better sound.
          </h1>
          <p className="mt-6 text-slate-200 text-xl w-7/12 font-thin">
            We share common trends and strategies for improving your rental
            income.
          </p>
          <div className="flex mt-20">
            <div className="flex flex-col justify-start pt-2 pr-4">
              <img src={reviewSvg} alt="review image" />
            </div>
            <div className="flex flex-col">
              <p className="text-slate-100 text-xl w-7/12">
                “You made it so simple. My new site is so much faster and easier
                to work with than my old site.”
              </p>
              <span className="text-sm text-slate-100 mt-10 font-semibold">
                Rhoda Brady
              </span>
            </div>
          </div>
        </div>
      </Fade>

      <img src={reviewsBackground} alt="" />
    </div>
  );
};

export default Reviews;
