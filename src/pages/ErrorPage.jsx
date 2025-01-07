import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ErrorPage = () => {
  return (
    <>
      <Header />

      <div className="h-screen flex flex-col items-center justify-center px-4 text-pretty">
        <div className="text-center">
          <h1 className="text-6xl font-extrabold mt-6">404</h1>
          <p className="text-6xl font-semibold mt-4 font-bebas-neue text-red-500">
            Mission Failed
          </p>
          <p className="mt-2 text-gray-500">
            It seems you{"'"}ve stumbled on a missing page or broken link.
          </p>
          <Link to="/">
            <button className="btn btn-neutral mt-6">Back to Base</button>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ErrorPage;
