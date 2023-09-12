import React, { useContext } from "react";
import SideContext from "../context/SidebarContext";
import { adminSidebarContent } from "../lib/sideBarContent";
import Sidebar from "../components/Sidebar";

const AdminViewForm = () => {
	const { toggleSidebar } = useContext(SideContext);
	return (
		<>
			<div className="">
				<Sidebar sideBarContent={adminSidebarContent} />
				<div className="w-[100%] mx-auto overflow-y-auto mb-8 sm:mb-0 overflow-x-hidden">
					<div
						className={`${toggleSidebar ? "sm:ml-[14rem] " : "sm:ml-[6rem]"}`}
					>
						<div className="w-[95%] mx-auto my-4">
							<div className="md:grid w-full md:grid-cols-2 gap-4 md:gap-8 mt-4 flex flex-col">
								<div className="border p-3 border-[#6272B9] rounded-md">
									<p>vdsbvdbvdfjkbdfjbv</p>
								</div>
								<div className="border p-3 border-[#6272B9] rounded-md">
									<p>vdsbvdbvdfjkbdfjbv</p>
								</div>
							</div>
							<div className="md:grid w-full md:grid-cols-2 gap-4 md:gap-8 mt-4 flex flex-col">
								<div className="border p-3 border-[#6272B9] rounded-md">
									<p>vdsbvdbvdfjkbdfjbv</p>
								</div>
								<div className="border p-3 border-[#6272B9] rounded-md">
									<p>vdsbvdbvdfjkbdfjbv</p>
								</div>
							</div>
							<div className="md:grid w-full md:grid-cols-2 gap-4 md:gap-8 mt-4 flex flex-col">
								<div className="border p-3 border-[#6272B9] rounded-md">
									<p>vdsbvdbvdfjkbdfjbv</p>
								</div>
								<div className="border p-3 border-[#6272B9] rounded-md">
									<p>vdsbvdbvdfjkbdfjbv</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AdminViewForm;
