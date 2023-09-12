import { useContext } from "react";
import Sidebar from "../components/Sidebar";
import { studentSidebarContent } from "../lib/sideBarContent";
import SideContext from "../context/SidebarContext";

import StudentViewFormDetails from "../components/StudentViewFormDetails";
const StudentViewForm = () => {
  const { toggleSidebar } = useContext(SideContext);
  return (
    <>
      <div className="">
        <Sidebar sideBarContent={studentSidebarContent} />
        <div className="w-[100%] mx-auto overflow-y-auto mb-8 sm:mb-0 overflow-x-hidden">
          <div
            className={`${toggleSidebar ? "sm:ml-[14rem] " : "sm:ml-[6rem]"}`}
          >
            <StudentViewFormDetails />
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentViewForm;
