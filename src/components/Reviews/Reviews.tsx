import reviewsBackground from "../../assets/reviews-img.png";
import reviewSvg from "../../assets/review.svg";
import { Fade } from "react-awesome-reveal";

const Reviews = () => {
  return (
    <div className="flex min-h-screen bg-indigo-600 justify-end md:h-screen">
      <Fade direction="left" triggerOnce duration={2500}>
        <div className="flex flex-col p-20 md:p-60 justify-center items-center md:items-start">
          <Fade direction="up" triggerOnce duration={1500}>
            <h1 className="font-bold text-4xl text-slate-50 text-center md:text-left md:text-5xl">
              Comfortable buds <br className="hidden md:block" />
              with better sound.
            </h1>
          </Fade>
          <Fade direction="down" triggerOnce duration={1500} delay={500}>
            <p className="mt-6 text-slate-200 text-center text-xl md:text-left font-thin">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
              pariatur quam magni! Rerum nesciunt magni delectus necessitatibus
              aspernatur similique deleniti sunt natus esse tempora.
            </p>
          </Fade>
          <Fade direction="right" triggerOnce duration={1500} delay={1000}>
            <div className="flex mt-20">
              <div className="flex flex-col justify-start"></div>
              <div className="flex flex-col items-center justify-center md:items-start">
                <p className="text-slate-100 text-center text-xl md:text-left">
                  “You made it so simple. My new site is so much faster and
                  easier to work with than my old site.”
                </p>
                <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-10">
                  <img
                    src={reviewSvg}
                    alt="review image"
                    className="w-20 md:hidden"
                  />
                  <span className="text-md text-center text-slate-100 font-semibold md:text-left">
                    Rhoda Brady
                  </span>
                  <img
                    src={reviewSvg}
                    alt="review image"
                    className="w-16 hidden md:block"
                  />
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </Fade>
      <img
        src={reviewsBackground}
        alt="background"
        className="hidden md:block"
      />
    </div>
  );
};

export default Reviews;
