import { Input } from "./ui/input";
import { useState } from "react";
import { Label } from "@radix-ui/react-label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import UploadBtn from "../assets/upload.svg";
interface UserDetails {
	userDetails: {
		full_name: string;
		matno: string;
		email: string;
	},
	userId: string
}
const StudentForm = ({ userDetails, userId }: UserDetails) => {
	const [studentDetails, setStudentDetails] = useState({

	})
	return (
		<>
			<div className="w-[95%] mx-auto">
				<div className="h-[60px] py-6">
					<p className="text-2xl">Welcome <span>{userDetails.full_name}</span></p>
				</div>
				<div className="my-4">Basic Details</div>
				<div className="w-full">
					<form action="">
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

							{/* <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className={`w-full h-12 justify-between text-base bg-[#ecebf382]`}
                  >
                    {value
                      ? occupations.find(
                          (occupation) => occupation.value === value
                        )?.label
                      : "Select Occupation..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="min-w-[300px] p-0 max-h-[10rem] overflow-y-scroll">
                  <Command>
                    <CommandInput placeholder="Search occupation..." />
                    <CommandEmpty>No occupation found.</CommandEmpty>
                    <CommandGroup>
                      {occupations.map((occupation) => (
                        <CommandItem
                          key={occupation.value}
                          onSelect={(currentValue) => {
                            setValue(
                              currentValue === value ? "" : currentValue
                            );

                            setOpen(false);
                          }}
                        >
                          <Check
                            className={`
                                mr-2 h-4 w-4
                                ${
                                  value === occupation.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                }
                              `}
                          />
                          {occupation.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover> */}
						</div>
						<div className="md:grid w-full md:grid-cols-2 gap-4 md:gap-8 my-6 flex flex-col">
							<Input
								type="tel"
								name="phone"
								className={`w-full h-12 bg-[#ecebf382] text-base `}
								placeholder="Phone No"
							/>

							<Input
								type="tel"
								name="year of entry"
								className={`w-full h-12 bg-[#ecebf382] text-base `}
								placeholder="Year of Entry"
							/>
						</div>
						<div className="md:grid w-full md:grid-cols-2 gap-4 md:gap-8 my-6 flex flex-col">
							<Input
								type="tel"
								name="year of graduation"
								className={`w-full h-12 bg-[#ecebf382] text-base `}
								placeholder="Year of Graduation"
							/>
							<Input
								type="text"
								name="parent name"
								className={`w-full h-12 bg-[#ecebf382] text-base `}
								placeholder="Parents Name"
							/>
						</div>
						<div className="md:grid w-full md:grid-cols-2 gap-4 md:gap-8 my-6 flex flex-col">
							<Input
								type="text"
								name="parents no"
								className={`w-full h-12 bg-[#ecebf382] text-base `}
								placeholder="Parents No"
							/>
							<Input
								type="text"
								name="address"
								className={`w-full h-12 bg-[#ecebf382] text-base `}
								placeholder="Residential Address"
							/>
						</div>
						<div className="md:grid w-full md:grid-cols-2 gap-4 md:gap-8 my-6 flex flex-col">
							<Input
								type="tel"
								name="level"
								className={`w-full h-12 bg-[#ecebf382] text-base `}
								placeholder="Level"
							/>
							<Input
								type="text"
								name="hostel name"
								className={`w-full h-12 bg-[#ecebf382] text-base `}
								placeholder="Hostel Name"
							/>
						</div>

						<div className="">
							<RadioGroup className="flex">
								<div className="flex items-center space-x-2">
									<RadioGroupItem value="male" id="r1" />
									<Label htmlFor="r1">Male</Label>
								</div>
								<div className="flex items-center space-x-2">
									<RadioGroupItem value="female" id="r2" />
									<Label htmlFor="r2">Female</Label>
								</div>
							</RadioGroup>
							<div className="">
								<p>Allergy/Disabilty</p>
								<RadioGroup className="flex">
									<div className="flex items-center space-x-2">
										<RadioGroupItem value="yes" id="r1" />
										<Label htmlFor="r1">Yes</Label>
									</div>
									<div className="flex items-center space-x-2">
										<RadioGroupItem value="no" id="r2" />
										<Label htmlFor="r2">No</Label>
									</div>
								</RadioGroup>
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
						</div>
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
						</div>
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
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default StudentForm;
