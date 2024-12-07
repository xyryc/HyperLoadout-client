import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

const SportsCategories = () => {
  const [sports, setSports] = useState([]);

  useEffect(() => {
    fetch("sports.json")
      .then((res) => res.json())
      .then((data) => {
        setSports(data);
      });
  }, []);

  return (
    <>
      <div className="container mx-auto px-4 py-20">
        <Fade cascade damping={0.1}>
          <div className="text-center pb-10">
            <h1 className="font-bebas-neue text-6xl font-bold">
              eSports Tournamets
            </h1>
            <p>
              Join the Action-Packed Journey Through Iconic eSports Titles That
              Define Competitive Gaming
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center place-items-center">
            {sports.map((item) => (
              <div
                key={item.id}
                className="w-full  shadow-md h-[450px] transition-all duration-300 overflow-hidden rounded-md relative cursor-pointer group"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-[1.2] transition-all duration-300"
                />

                <div className="w-full h-full absolute top-0 left-0 backdrop-blur-lg flex items-center justify-center flex-col px-[20px] opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <h2 className="text-[1.5rem] text-white font-bold text-center leading-[30px] capitalize">
                    {item.title}
                  </h2>
                  <p>{item.category}</p>
                  <p className="text-[1rem] text-white text-center mt-3 opacity-85">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </>
  );
};

export default SportsCategories;
