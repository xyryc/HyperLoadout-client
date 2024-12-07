import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import Marquee from "react-fast-marquee";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="py-20">
      <div className="text-center pb-10">
        <h1 className="font-bebas-neue text-6xl font-bold">
          The Choice of Champions
        </h1>
        <p>
          Trusted by passionate gamers for precision, durability, and peak
          performance in every match
        </p>
      </div>

      <Fade cascade damping={0.1}>
        <Marquee speed={30}>
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex flex-col w-72 text-center items-center mx-10"
            >
              <img
                className="w-20 h-20 rounded-full object-cover"
                src={review.image}
                alt={review.name}
              />
              <h3 className="font-bold text-lg">{review.name}</h3>
              <p className="font-light">{review.player_profession}</p>
              <p className="mt-3">&quot; {review.review} &quot;</p>
            </div>
          ))}
        </Marquee>
      </Fade>
    </div>
  );
};

export default Reviews;
