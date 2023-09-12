import React, { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { LoginDetail } from "../interface";
import { Input } from "../components/ui/input";
import supabase from "../lib/supabase";

const Login = () => {
	const [signInDetail, setSignInDetails] = useState<LoginDetail>({
		email: "",
		password: "",
	});
	const navigate = useNavigate();
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<boolean>(false);

	const [inputValidity, setInputValidity] = useState({
		email: false,
		password: false,
	});

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const { email, password } = signInDetail;
		try {
			const {
				data: { user },
				error,
			} = await supabase.auth.signInWithPassword({
				email: email,
				password: password,
			});
			if (error) {
				throw error;
			}
			if (user) {
				setLoading(false);
				// Check if the user is an Student or Admin

				const admin = user?.user_metadata?.staffid;
				if (admin) {
					navigate("/admin-dashboard/fill-form");
				} else {
					navigate("/student-dashboard/fill-form");
				}
			}
		} catch (error) { }
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setSignInDetails((prevState) => ({
			...prevState,
			[name]: value,
		}));

		setInputValidity((prevState) => ({
			...prevState,
			[name]: false,
		}));
	};
	const handleInputBlur = (inputField: string) => {
		const { email, password } = signInDetail;
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
		}
	};
	return (
		<section className="w-[95%] sm:w-[85%] md:w-[75%] lg:w-[55%] mx-auto max-w-[1600px]">
			<div className="bg-white my-4 h-[100%] sm:h-auto rounded-xl p-4 sm:p-8 md:p-12">
				<div className="w-full">
					<form action="" onSubmit={handleSubmit}>
						<Input
							type="email"
							name="email"
							className={`w-full my-6 h-12 bg-[#ecebf382] text-base ${inputValidity.email ? "bg-[#fddddd]" : ""
								}`}
							placeholder="Enter Your Email"
							value={signInDetail.email}
							onChange={handleInputChange}
							onBlur={() => handleInputBlur("email")}
						/>
						<Input
							type="password"
							name="password"
							className={`w-full mt-6 mb-1 h-12 bg-[#ecebf382] text-base ${inputValidity.password ? "bg-[#fddddd]" : ""
								}`}
							placeholder="Enter Your Password"
							value={signInDetail.password}
							onChange={handleInputChange}
							onBlur={() => handleInputBlur("password")}
						/>

						<Button
							type="submit"
							className="bg-[#6272B9] text-white mt-4 text-base w-full text-center"
						>
							Login
						</Button>
					</form>
				</div>

				<div className="flex space-x-1 mt-4 justify-center">
					<p>Dont have an account?</p>
					<Link to="/student-signup" className="text-[#6272B9]">
						Signup
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Login;
