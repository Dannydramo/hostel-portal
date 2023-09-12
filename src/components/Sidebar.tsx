import { Fragment, useContext } from "react";
import { NavLink } from "react-router-dom";
import SideContext from "../context/SidebarContext";
import Logout from "../assets/Logout.svg";

interface SideBarProps {
  sideBarContent: {
    value: string;
    href: string;
  }[];
}

const Sidebar = ({ sideBarContent }: SideBarProps) => {
  const { toggleSidebar, setToggleSidebar } = useContext(SideContext);
  return (
    <Fragment>
      <div
        className={`transition-all h-[70px] w-full bottom-0 sm:top-0 sm:min-h-screen sm:h-full fixed lg:translate-x-0 sm:fixed z-[10000] sm:px-6 sm:pt-6 sm:pb-4 flex flex-col sm:w-[200px] bg-[#6272B9] sm:overflow-x-hidden ${
          toggleSidebar ? "sm:w-[200px]" : "sm:w-[64px]"
        }`}
      >
        <div className=" sm:space-x-8 items-center hidden sm:flex sm:mb-12 w-48">
          <div
            className="hidden sm:block cursor-pointer"
            onClick={() => setToggleSidebar(!toggleSidebar)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </div>
        </div>

        <ul className="flex flex-row sm:flex-col w-[70%] pt-4 text-sm sm:text-base flex-1 px-4 sm:px-0 sm:space-y-10 space-x-3 sm:space-x-0 text-white justify-between sm:justify-start lg:py-0 shadow-dark sm:shadow-none">
          {sideBarContent.map((sideBarText) => (
            <NavLink
              key={sideBarText.href}
              to={`/${sideBarText.href}`}
              className="flex flex-col items-center sm:flex-row"
            >
              <img
                src={Logout}
                alt="Logout"
                className="mb-2 sm:mb-0 mr-2 w-4"
              />
              <span
                className={`${
                  !toggleSidebar ? "hidden" : "block"
                } text-xs sm:text-base`}
              >
                {sideBarText.value}
              </span>
            </NavLink>
          ))}
        </ul>
        <button className="outline-none absolute flex-col sm:flex-row flex items-center top-4 sm:top-0 right-0 sm:relative">
          <img
            src={Logout}
            alt="Logout"
            className="mb-2 sm:mb-0 mr-6 sm:mr-2 w-4"
          />
          <span
            className={`text-white text-xs sm:text-base pl-2 text-center pr-10 font-display ${
              !toggleSidebar ? "hidden" : "block"
            }`}
          >
            Logout
          </span>
        </button>
      </div>
    </Fragment>
  );
};

export default Sidebar;
