import { FaCheckCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Title from "../components/Title";

const About = () => {
  return (
    <div className="min-h-screen container mx-auto px-4">
      <Title
        heading={"About"}
        subHeading={
          "Your Ultimate Destination for Premium Gaming Gear and Accessories"
        }
      />

      <div className="py-16">
        {/* About Us Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <img
            src="https://i.ibb.co.com/48L13VP/alienware-pc.png"
            alt="Gadgets Showcase"
            className="w-full lg:w-1/2 h-80 object-cover rounded-lg shadow-lg"
          />
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
            <p className=" leading-relaxed mb-4 opacity-80">
              At HyperLoadout, we are dedicated to equipping gamers and eSports
              enthusiasts with top-notch gear. Our mission is to provide a
              seamless shopping experience that focuses on performance,
              reliability, and your competitive edge.
            </p>
            <p className=" leading-relaxed">
              From high-performance peripherals to innovative gaming
              accessories, we offer a meticulously curated selection designed to
              elevate your gameplay and suit both casual players and hardcore
              pros alike.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="my-16">
          <h2 className="text-3xl font-semibold text-center mb-8">
            What Sets Us Apart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
            {/* Values or features */}
            {[
              {
                title: "Quality Assurance",
                description:
                  "All products are rigorously tested to ensure top quality.",
              },
              {
                title: "Customer Support",
                description: "Our dedicated team is here to help you 24/7.",
              },
              {
                title: "Innovative Products",
                description:
                  "We bring the latest innovations from top tech brands.",
              },
              {
                title: "Secure Payments",
                description:
                  "We prioritize your security with trusted payment options.",
              },
              {
                title: "Fast Shipping",
                description:
                  "Quick and reliable shipping for a seamless experience.",
              },
              {
                title: "Satisfaction Guarantee",
                description:
                  "We stand by our products with a satisfaction guarantee.",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <FaCheckCircle className="text-green-600 text-3xl mr-4" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="opacity-80">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="my-16 text-center">
          <h2 className="text-3xl font-semibold mb-8">Meet Our Team</h2>
          <p className=" mb-8 max-w-2xl mx-auto opacity-80">
            Our team of experts is passionate about technology and dedicated to
            delivering an exceptional shopping experience.
          </p>
          <div className="flex justify-center gap-8 drop-shadow-md">
            {[
              {
                name: "Anik",
                role: "CEO & Founder",
                image: "https://i.ibb.co.com/7YSvbxv/anik.jpg",
              },
              {
                name: "Jawed",
                role: "Lead Developer",
                image:
                  "https://i.ibb.co.com/jL5P1zz/jawed-karim-married-status-now.webp",
              },
              {
                name: "Paul",
                role: "CTO",
                image: "https://i.ibb.co.com/XVb80J8/Paul-Biggar-1-718x523.png",
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 object-cover rounded-xl mb-4 shadow-lg"
                />
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="opacity-80">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-semibold mb-4">
            Ready to Find Your Next Gear?
          </h2>
          <p className="mb-6">
            Explore our wide selection and experience the future of technology
            with HyperLoadout.
          </p>
          <NavLink to="/all-equipments" className="btn btn-outline">
            Shop Now
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default About;
