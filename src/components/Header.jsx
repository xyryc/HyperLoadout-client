import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import ThemeToggle from "./ThemeToggle";
import { Tooltip } from "react-tooltip";
import { LuGamepad2 } from "react-icons/lu";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut();
  };

  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-600 font-bold underline" : ""
          }
          to="/"
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-600 font-bold underline" : ""
          }
          to="/all-equipments"
        >
          All Equipments
        </NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-red-600 font-bold underline" : ""
              }
              to="/add-equipment"
            >
              Add Equipment
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-red-600 font-bold underline" : ""
              }
              to="/my-equipment"
            >
              My Equipments
            </NavLink>
          </li>
        </>
      )}

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-600 font-bold underline" : ""
          }
          to="/about"
        >
          About
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="font-bebas-neue tracking-wide text-6xl">
      {/* Full-width Navbar with Blurry Background */}
      <div className="fixed z-50 w-full bg-black/5 backdrop-blur">
        {/* Centered Content Container */}
        <div className="container mx-auto">
          <div className="navbar">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
                >
                  {links}
                </ul>
              </div>
              <Link
                to="/"
                className="btn btn-ghost text-lg lg:text-2xl hover:text-red-600"
              >
                <LuGamepad2 /> HyperLoadout
              </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{links}</ul>
            </div>

            <div className="navbar-end">
              <ThemeToggle />
              {user ? (
                <div className="flex justify-center items-center gap-2">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        data-tooltip-id="username"
                        data-tooltip-content={user?.displayName}
                        alt={user?.displayName}
                        src={user?.photoURL}
                      />
                      <Tooltip id="username" className="z-10" />
                    </div>
                  </div>
                  <Link
                    onClick={handleLogOut}
                    className="btn btn-ghost bg-transparent outline-none border-none shadow-none"
                  >
                    Logout
                  </Link>
                </div>
              ) : (
                <>
                  <Link
                    to="/register"
                    className="btn btn-ghost hover:text-red-600 bg-transparent outline-none border-none shadow-none"
                  >
                    Register
                  </Link>
                  <Link
                    to="/login"
                    className="btn btn-ghost hover:text-red-600 bg-transparent outline-none border-none shadow-none"
                  >
                    Login
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
