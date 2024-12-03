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
          <Header />

          <div className="min-h-[calc(100vh-292px)] py-4 font-roboto">
            <Outlet />
          </div>

          <Footer />
        </div>
      )}
    </>
  );
};

export default MainLayout;
