import { useContext } from "react";
import Sidebar from "../components/Sidebar";

import SideContext from "../context/SidebarContext";
import StudentStatusComponent from "../components/StudentStatusComponent";
import { studentSidebarContent } from "../lib/sideBarContent";

const StudentStatus = () => {
	const { toggleSidebar } = useContext(SideContext);
	return (
		<>
			<div className="">
				<Sidebar sideBarContent={studentSidebarContent} />
				<div className="w-[100%] mx-auto overflow-y-auto overflow-x-hidden">
					<div
						className={`${toggleSidebar ? "sm:ml-[14rem] " : "sm:ml-[6rem]"}`}
					>
						<StudentStatusComponent />
					</div>
				</div>
			</div>
		</>
	);
};

export default StudentStatus;
