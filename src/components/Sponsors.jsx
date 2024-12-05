import Marquee from "react-fast-marquee";

const Sponsors = () => (
  <>
    <div className="pb-20">
      <h1 className="font-bebas-neue text-6xl font-bold text-center my-4">
        Our Partners
      </h1>
      <Marquee>
        <img
          className="  h-32 px-10"
          src="https://upload.wikimedia.org/wikipedia/commons/7/79/Logo_Razer_2017.png"
          alt=""
        />
        <img
          className="  h-32 px-10"
          src="https://www.pngplay.com/wp-content/uploads/6/Alienware-Gaming-Logo-PNG.png"
          alt=""
        />
        <img
          className=" h-32 px-10"
          src="https://www.highsense-gaming.com/wp-content/uploads/2024/04/Zowie-3.png.webp"
          alt=""
        />
      </Marquee>
    </div>
  </>
);

export default Sponsors;
