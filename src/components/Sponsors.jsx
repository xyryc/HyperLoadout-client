import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import Marquee from "react-fast-marquee";
import { Tooltip } from "react-tooltip";

const Sponsors = () => {
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    fetch("sponsors.json")
      .then((res) => res.json())
      .then((data) => setSponsors(data));
  }, []);

  return (
    <>
      <Fade cascade damping={0.1}>
        <div className="pb-20 pt-40 text-center">
          <div className="pb-10">
            <h1 className="font-bebas-neue text-6xl font-bold text-center">
              Our Affiliates
            </h1>
            <p>Building success together with industry leaders worldwide</p>
          </div>

          <Marquee direction="right">
            {sponsors.map((sponsor) => (
              <img
                data-tooltip-id="sponsor"
                data-tooltip-content={sponsor.name}
                key={sponsor.id}
                className="h-32 px-10"
                src={sponsor.image}
                alt={sponsor.name}
              />
            ))}
          </Marquee>
          <Tooltip id="sponsor" />
        </div>
      </Fade>
    </>
  );
};

export default Sponsors;
