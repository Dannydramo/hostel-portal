import { Input } from "./ui/input";
import { ChangeEvent, FormEvent, useState } from "react";
import UploadBtn from "../assets/upload.svg";
import { Check, ChevronsUpDown } from "lucide-react"
import { Button } from "./ui/button"
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
} from "./ui/command"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "./ui/popover"
import { courseNames } from "../lib/courses";

interface UserDetails {
	userDetails: {
		full_name: string;
		matno: string;
		email: string;
	},
	userId: string
}
const StudentForm = ({ userDetails, userId }: UserDetails) => {
	const [open, setOpen] = useState(false)
	const [value, setValue] = useState("")
	const uniqueCourses = courseNames.slice(0, 100).map(name => ({ name, value: name }));

	const [studentDetails, setStudentDetails] = useState({
		phone: '',
		yearOfEntry: '',
		yearOfGraduation: '',
		parentName: '',
		parentsNo: '',
		address: '',
		level: '',
		hostelName: '',
		gender: '',
		hasAllergyOrDisability: '',
		department: ''
	});

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setStudentDetails((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmitDetails = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// Validate form fields here if needed

		// Handle form submission here, e.g., send data to the server
		console.log('Submitting student details:', studentDetails);
	};

	return (
		<>
			<div className="w-[95%] mx-auto">
				<div className="h-[60px] py-6">
					<p className="text-2xl">Welcome <span>{userDetails.full_name}</span></p>
				</div>
				<div className="my-4">Basic Details</div>
				<div className="w-full">
					<form action="" onSubmit={handleSubmitDetails}>
						<div className="md:grid w-full md:grid-cols-2 gap-4 md:gap-8 my-6 flex flex-col">
							<div className={`w-full h-12 bg-[#ecebf382] text-base `}>
								<p className="mt-2 ml-2">{userDetails.full_name}</p>
							</div>
							<div className={`w-full h-12 bg-[#ecebf382] text-base `}>
								<p className="mt-2 ml-2">{userDetails.email}</p>
							</div>
						</div>
						<div className="md:grid w-full md:grid-cols-2 gap-4 md:gap-8 my-6 flex flex-col">
							<div className={`w-full h-12 bg-[#ecebf382] text-base `}>
								<p className="mt-2 ml-2">{userDetails.matno}</p>
							</div>

							<Popover open={open} onOpenChange={setOpen}>
								<PopoverTrigger asChild>
									<Button
										variant="outline"
										role="combobox"
										aria-expanded={open}
										className={`w-full h-12 justify-between text-base bg-[#ecebf382]`}
									>
										{value
											? uniqueCourses.find(
												(courses) => courses.value === value
											)?.name
											: "Select Course..."}
										<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
									</Button>
								</PopoverTrigger>
								<PopoverContent className="min-w-[300px] p-0 max-h-[10rem] overflow-y-scroll">
									<Command>
										<CommandInput placeholder="Search Course..." />
										<CommandEmpty>No Course found.</CommandEmpty>
										<CommandGroup>
											{uniqueCourses.map((courses) => (
												<CommandItem
													key={courses.value}
													onSelect={(currentValue) => {
														setValue(
															currentValue === value ? "" : currentValue
														);
														setStudentDetails({
															...studentDetails,
															department: currentValue,
														});
														setOpen(false);
													}}
												>
													<Check
														className={`
                              										  mr-2 h-4 w-4
                                										${value === courses.value
																? "opacity-100"
																: "opacity-0"
															}
                             								 `}
													/>
													{courses.name}
												</CommandItem>
											))}
										</CommandGroup>
									</Command>
								</PopoverContent>
							</Popover>
						</div>
						<div className="md:grid w-full md:grid-cols-2 gap-4 md:gap-8 my-6 flex flex-col">
							<Input
								type="tel"
								name="phone"
								className={`w-full h-12 bg-[#ecebf382] text-base `}
								placeholder="Phone No"
								onChange={handleInputChange}
							/>

							<Input
								type="tel"
								name="yearOfEntry"
								className={`w-full h-12 bg-[#ecebf382] text-base `}
								placeholder="Year of Entry"
								onChange={handleInputChange}
							/>
						</div>
						<div className="md:grid w-full md:grid-cols-2 gap-4 md:gap-8 my-6 flex flex-col">
							<Input
								type="tel"
								name="yearOfGraduation"
								className={`w-full h-12 bg-[#ecebf382] text-base `}
								placeholder="Year of Graduation"
								onChange={handleInputChange}
							/>
							<Input
								type="text"
								name="parentName"
								className={`w-full h-12 bg-[#ecebf382] text-base `}
								placeholder="Parents Name"
								onChange={handleInputChange}
							/>
						</div>
						<div className="md:grid w-full md:grid-cols-2 gap-4 md:gap-8 my-6 flex flex-col">
							<Input
								type="text"
								name="parentsNo"
								className={`w-full h-12 bg-[#ecebf382] text-base `}
								placeholder="Parents No"
								onChange={handleInputChange}
							/>
							<Input
								type="text"
								name="address"
								className={`w-full h-12 bg-[#ecebf382] text-base `}
								placeholder="Residential Address"
								onChange={handleInputChange}
							/>
						</div>
						<div className="md:grid w-full md:grid-cols-2 gap-4 md:gap-8 my-6 flex flex-col">
							<Input
								type="tel"
								name="level"
								className={`w-full h-12 bg-[#ecebf382] text-base `}
								placeholder="Level"
								onChange={handleInputChange}
							/>
							<Input
								type="text"
								name="hostelName"
								className={`w-full h-12 bg-[#ecebf382] text-base `}
								placeholder="Hostel Name"
								onChange={handleInputChange}
							/>
						</div>

						<div className="">
							<div className="flex">
								<div className="flex items-center space-x-2">
									<label>
										Male
										<Input
											type="radio"
											name="gender"
											className='h-4'
											value="Male"
											checked={studentDetails.gender === 'Male'}
											onChange={handleInputChange}
										/>
									</label>
								</div>
								<div className="flex items-center space-x-2">
									<label>
										Female
										<Input
											type="radio"
											name="gender"
											value="Female"
											className='h-4'
											checked={studentDetails.gender === 'Female'}
											onChange={handleInputChange}
										/>
									</label>
								</div>
							</div>
							<div className="">
								<p>Allergy/Disabilty</p>
								<div className="flex">
									<div className="flex items-center space-x-2">
										<label>
											Yes
											<Input
												type="radio"
												name="hasAllergyOrDisability"
												value="Yes"
												className='h-4'
												checked={studentDetails.hasAllergyOrDisability === 'Yes'}
												onChange={handleInputChange}
											/>
										</label>
									</div>
									<div className="flex items-center space-x-2">
										<label>
											No
											<Input
												type="radio"
												name="hasAllergyOrDisability"
												value="No"
												className='h-4'
												checked={studentDetails.hasAllergyOrDisability === 'No'}
												onChange={handleInputChange}
											/>
										</label>
									</div>
								</div>
							</div>
						</div>

						{/* ================ DOCUMENT UPLOAD =============== */}
						<div className="md:grid w-full md:grid-cols-3 gap-4 md:gap-8 my-6 flex flex-col">
							<div className="relative">
								<div className="flex space-x-2 bg-[#6272b92b] p-4 rounded-md">
									<div className="bg-[#ffffffbd] p-1 rounded-sm">
										{/* Image */}
										<img src={UploadBtn} alt="" />
									</div>
									<div className="">
										<p>Upload accomodation clearance slip</p>
									</div>
								</div>
								<Input
									type="file"
									className="w-full h-full absolute cursor-pointer bottom-0 right-0 z-12 opacity-0"
									accept="image/jpg, image/png"
									multiple
								// onChange={(e) => uploadImage(e)}
								/>
							</div>
							<div className="relative">
								<div className="flex space-x-2 bg-[#6272b92b] p-4 rounded-md">
									<div className="bg-[#ffffffbd] p-1 rounded-sm">
										{/* Image */}
										<img src={UploadBtn} alt="" />
									</div>
									<div className="">
										<p>Upload school fees receipt</p>
									</div>
								</div>
								<Input
									type="file"
									className="w-full h-full absolute cursor-pointer bottom-0 right-0 z-12 opacity-0"
									accept="image/jpg, image/png"
									multiple
								// onChange={(e) => uploadImage(e)}
								/>
							</div>

							<div className="relative">
								<div className="flex space-x-2 bg-[#6272b92b] p-4 rounded-md">
									<div className="bg-[#ffffffbd] p-1 rounded-sm">
										{/* Image */}
										<img src={UploadBtn} alt="" />
									</div>
									<div className="">
										<p>Upload a passport photograph</p>
									</div>
								</div>
								<Input
									type="file"
									className="w-full h-full absolute cursor-pointer bottom-0 right-0 z-12 opacity-0"
									accept="image/jpg, image/png"
									multiple
								// onChange={(e) => uploadImage(e)}
								/>
							</div>
						</div>
						<div className="md:grid w-full md:grid-cols-3 gap-4 md:gap-8 my-6 flex flex-col">
							<div className="relative">
								<div className="flex space-x-2 bg-[#6272b92b] p-4 rounded-md">
									<div className="bg-[#ffffffbd] p-1 rounded-sm">
										{/* Image */}
										<img src={UploadBtn} alt="" />
									</div>
									<div className="">
										<p>Upload hostel accommodation undertaking</p>
									</div>
								</div>
								<Input
									type="file"
									className="w-full h-full absolute cursor-pointer bottom-0 right-0 z-12 opacity-0"
									accept="image/jpg, image/png"
									multiple
								// onChange={(e) => uploadImage(e)}
								/>
							</div>
							<div className="relative">
								<div className="flex space-x-2 bg-[#6272b92b] p-4 rounded-md">
									<div className="bg-[#ffffffbd] p-1 rounded-sm">
										{/* Image */}
										<img src={UploadBtn} alt="" />
									</div>
									<div className="">
										<p>Upload hostel fee receipt</p>
									</div>
								</div>
								<Input
									type="file"
									className="w-full h-full absolute cursor-pointer bottom-0 right-0 z-12 opacity-0"
									accept="image/jpg, image/png"
									multiple
								// onChange={(e) => uploadImage(e)}
								/>
							</div>


						</div>

						<Button
							className="bg-[#6272B9] text-white mt-4 p-4 text-base w-[300px] flex justify-center text-center"
							type="submit"
						>
							Submit Form
						</Button>
					</form>
				</div>
			</div>
		</>
	);
};

export default StudentForm;
