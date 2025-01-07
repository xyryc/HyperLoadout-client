import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Loading from "../components/Loading";

const MainLayout = () => {
  const { loading } = useContext(AuthContext);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div className="h-[68px]">
            <Header />
          </div>

          <div className="min-h-screen font-roboto ">
            <Outlet />
          </div>

          <Footer />
        </div>
      )}
    </>
  );
};

export default MainLayout;
