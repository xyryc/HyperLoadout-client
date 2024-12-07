import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content pt-20 pb-4 mt-10">
      <div className="container mx-auto grid grid-cols-1 gap-8 lg:grid-cols-3 px-6 lg:px-20">
        {/* Logo and Motto */}
        <div className="space-y-4">
          <p className="text-4xl font-bebas-neue tracking-widest">
            HyperLoadout
          </p>
          <p className="text-base italic font-roboto text-gray-600 dark:text-gray-400">
            {`"Gear up. Dominate. Repeat."`}
          </p>
          <p className="text-sm font-roboto text-gray-600 dark:text-gray-400">
            Elevate your gaming experience with premium eSports equipment.
          </p>
          <div className="flex items-center space-x-3 text-sm font-roboto">
            <FaPhone className="" />
            <span>+842 3535 343</span>
          </div>
          <div className="flex items-center space-x-3 text-sm font-roboto">
            <FaEnvelope className="" />
            <span>contact@hyperloadout.com</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bebas-neue  tracking-widest">
            Quick Links
          </h3>
          <nav className="mt-4 grid grid-flow-row gap-2 text-sm font-roboto">
            <a href="#" className="link link-hover">
              About Us
            </a>
            <a href="#" className="link link-hover">
              Contact
            </a>
            <a href="#" className="link link-hover">
              Partnerships
            </a>
            <a href="#" className="link link-hover">
              Careers
            </a>
          </nav>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-bebas-neue  tracking-widest">
            Connect with Us
          </h3>
          <div className="mt-4 flex space-x-4">
            <a
              href="#"
              className="p-3 rounded-full bg-base-300 hover:bg-primary hover:text-white transition"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-base-300 hover:bg-primary hover:text-white transition"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-base-300 hover:bg-primary hover:text-white transition"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-base-300 pt-4 text-center text-sm font-roboto text-gray-600 dark:text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} HyperLoadout. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
