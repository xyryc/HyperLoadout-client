/* eslint-disable react/prop-types */

const Title = ({ heading, subHeading }) => {
  return (
    <div className="text-center py-6">
      <h1 className="text-3xl sm:text-6xl font-bebas-neue font-bold">{heading}</h1>
      <p className="text-lg">{subHeading}</p>
    </div>
  );
};

export default Title;
