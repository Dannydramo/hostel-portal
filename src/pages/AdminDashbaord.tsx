import { useContext, useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import SideContext from "../context/SidebarContext";
import AdminForm from "../components/AdminForm";
import { adminSidebarContent } from "../lib/sideBarContent";
import supabase from "../lib/supabase";
import { User } from "@supabase/supabase-js";
import { AdminReg } from "../interface";
import { useNavigate } from "react-router-dom";

const AdminDashbaord = () => {
	const { toggleSidebar } = useContext(SideContext);
	const [user, setUser] = useState<User | null>();
	const [userDetails, setUserDetails] = useState<AdminReg>({
		full_name: "",
		email: "",
		staffid: "",
	});
	const navigate = useNavigate();

	useEffect(() => {
		async function getUser() {
			const {
				data: { user },
				error,
			} = await supabase.auth.getUser();

			setUser(user);

			if (!user) {
				navigate("/login");
			} else {
				const { data, error } = await supabase
					.from("profiles")
					.select()
					.eq("id", user?.id);

				if (data) {
					setUserDetails(data[0]);
					console.log(userDetails);
				} else {
					console.log(error.message);
				}
			}
		}

		getUser();
	}, []);
	return (
		<div>
			<div className="">
				<Sidebar sideBarContent={adminSidebarContent} />
				<div className="w-[100%] mx-auto overflow-y-auto overflow-x-hidden">
					<div
						className={`${toggleSidebar ? "sm:ml-[14rem] " : "sm:ml-[6rem]"}`}
					>
						{user && <AdminForm userDetails={userDetails} userId={user?.id} />}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdminDashbaord;
