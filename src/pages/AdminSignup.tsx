import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { FormEvent, useContext, useState } from "react";
import AuthContext from "../context/AuthContext";

const AdminSignup = () => {
	const { handleAdminSignup } = useContext(AuthContext);
	const [adminSignUpDetails, setAdminSignupDetails] = useState({
		fullname: "",
		email: "",
		staffid: "",
		password: "",
	});
	const [inputValidity, setInputValidity] = useState({
		fullname: false,
		email: false,
		staffid: false,
		password: false,
	});
	const navigate = useNavigate();

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setAdminSignupDetails((prevState) => ({
			...prevState,
			[name]: value,
		}));
		setInputValidity((prevState) => ({
			...prevState,
			[name]: false,
		}));
	};

	const handleInputBlur = (inputField: string) => {
		const { email, password, staffid, fullname } = adminSignUpDetails;
		if (inputField === "email") {
			setInputValidity((prevState) => ({
				...prevState,
				email: email.trim() === "",
			}));
		} else if (inputField === "password") {
			setInputValidity((prevState) => ({
				...prevState,
				password: password.trim() === "",
			}));
		} else if (inputField === "fullname") {
			setInputValidity((prevState) => ({
				...prevState,
				fullname: fullname.trim() === "",
			}));
		} else if (inputField === "staffid") {
			setInputValidity((prevState) => ({
				...prevState,
				staffid: staffid.trim() === "",
			}));
		}
	};

	const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { fullname, email, staffid, password } = adminSignUpDetails;
		try {
			if (
				fullname.trim() === "" ||
				password.trim() === "" ||
				email.trim() === "" ||
				staffid.trim() === ""
			) {
				console.log("Please enter all required fields");
				setInputValidity((prevState) => ({
					...prevState,
					fullName: fullname.trim() === "",
					password: password.trim() === "",
					email: email.trim() === "",
					matno: staffid.trim() === "",
				}));
			} else {
				const data = await handleAdminSignup(
					fullname,
					email,
					staffid,
					password
				);
				if (data) {
					console.log(data);

					navigate("/login");
				}
			}
		} catch (error: any) { }
	};

	return (
		<section className="w-[95%] sm:w-[85%] md:w-[75%] lg:w-[55%] mx-auto max-w-[1600px]">
			<div className="bg-white my-4 h-[100%] sm:h-auto rounded-xl">
				<div className="bg-[#6272B9] rounded-xl text-white p-4 mb-6 w-full text-center">
					<p>ADMIN SIGNUP</p>
				</div>
				<div className="w-full px-4 sm:px-8 md:px-12">
					<form action="" onSubmit={handleSignUp}>
						<Input
							type="text"
							name="fullname"
							value={adminSignUpDetails.fullname}
							className={`w-full my-6 h-12 bg-[#ecebf382] text-base ${inputValidity.fullname ? "bg-[#fddddd]" : ""
								} `}
							placeholder="Enter Your Full name"
							onChange={handleInputChange}
							onBlur={() => handleInputBlur("fullname")}
						/>
						<Input
							type="email"
							name="email"
							value={adminSignUpDetails.email}
							className={`w-full my-6 h-12 bg-[#ecebf382] text-base ${inputValidity.email ? "bg-[#fddddd]" : ""
								} `}
							placeholder="Enter Your Email"
							onChange={handleInputChange}
							onBlur={() => handleInputBlur("email")}
						/>
						<Input
							type="text"
							name="staffid"
							value={adminSignUpDetails.staffid}
							className={`w-full my-6 h-12 bg-[#ecebf382] text-base ${inputValidity.staffid ? "bg-[#fddddd]" : ""
								} `}
							placeholder="Enter Your Staff Id"
							onChange={handleInputChange}
							onBlur={() => handleInputBlur("staffid")}
						/>
						<Input
							type="password"
							name="password"
							value={adminSignUpDetails.password}
							className={`w-full mt-6 mb-1 h-12 bg-[#ecebf382] text-base ${inputValidity.password ? "bg-[#fddddd]" : ""
								} `}
							placeholder="Enter Your Password"
							onChange={handleInputChange}
							onBlur={() => handleInputBlur("password")}
						/>

						<Button
							type="submit"
							className="bg-[#6272B9] text-white mt-4 text-base w-full text-center"
						>
							Sign Up
						</Button>
					</form>
				</div>
				<div className="flex space-x-1 mt-4 pb-4 justify-center">
					<p>Already have an account?</p>
					<Link to="/login" className="text-[#6272B9]">
						Login
					</Link>
				</div>
			</div>
		</section>
	);
};

export default AdminSignup;
