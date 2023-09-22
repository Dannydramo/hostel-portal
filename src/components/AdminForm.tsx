import { FormEvent, useState } from 'react'
import { Input } from "./ui/input";
import { handleAdminFormUpload } from '../services/adminForm';
import { Button } from './ui/button';
import { Check, ChevronsUpDown } from "lucide-react"
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
interface UserDetails {
	userDetails: {
		full_name: string;
		staffid: string;
		email: string;
	},
	userId: string
}
const hostels = [
	{ name: "Male Hostel A", type: "Male" },
	{ name: "Male Hostel B", type: "Male" },
	{ name: "Male Hostel C", type: "Male" },
	{ name: "Male Hostel D", type: "Male" },
	{ name: "Male Hostel E", type: "Male" },
	{ name: "Female Hostel A", type: "Female" },
	{ name: "Female Hostel B", type: "Female" },
	{ name: "Female Hostel C", type: "Female" },
	{ name: "Female Hostel D", type: "Female" },
	{ name: "Female Hostel E", type: "Female" },
];


const AdminForm = ({ userDetails, userId }: UserDetails) => {

	const [open, setOpen] = useState(false);
	const [value, setValue] = useState('');
	const [adminDetails, setAdminDetails] = useState({
		phone: '',
		hostelallocated: '',
		address: ''
	})
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setAdminDetails((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};


	const handleSubmitDetails = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const { hostelallocated, address, phone } = adminDetails

		if (hostelallocated.trim() === '' || address.trim() === '' || phone.trim() === '') {
			console.log('rghr');

		} else {

			try {
				const { errorMessage } = await handleAdminFormUpload(adminDetails, userId)
				if (errorMessage) {
					return
				}
				console.log('Admin Details Uploaded');

			} catch (error) {
				console.log('Error Submitting Admin Details');

			}

		}

	}



	return (
		<>
			<div className="w-[95%] mx-auto my-4">
				<div className="">Basic Details</div>
				<div className="w-full">
					<form action="" onSubmit={handleSubmitDetails}>
						<div className="md:grid w-full md:grid-cols-2 gap-4 md:gap-8 mt-4 flex flex-col">
							<div className={`w-full h-12 bg-[#ecebf382] text-base `}>
								<p className='mt-3 ml-4'>{userDetails.full_name}</p>
							</div>
							<div className={`w-full h-12 bg-[#ecebf382] text-base `}>
								<p className='mt-3 ml-4'>{userDetails.staffid}</p>
							</div>
						</div>
						<div className="md:grid w-full md:grid-cols-2 gap-4 md:gap-8 mt-4 flex flex-col">
							<div className={`w-full h-12 bg-[#ecebf382] text-base `}>
								<p className='mt-3 ml-4'>{userDetails.email}</p>
							</div>

							<Input
								type="tel"
								name="phone"
								value={adminDetails.phone}
								className={`w-full h-12 bg-[#ecebf382] text-base `}
								onChange={handleInputChange}
								placeholder="Phone Number"
							/>
						</div>
						<div className="md:grid w-full md:grid-cols-2 gap-4 md:gap-8 mt-4 flex flex-col">
							<Popover open={open} onOpenChange={setOpen}>
								<PopoverTrigger asChild>
									<Button
										variant="outline"
										role="combobox"
										aria-expanded={open}
										className={`w-full h-12 justify-between text-base bg-[#ecebf382]`}
									>
										{value
											? hostels.find(
												(hostel) => hostel.name === value
											)?.name
											: "Select Hostel..."}
										<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
									</Button>
								</PopoverTrigger>
								<PopoverContent className="min-w-[300px] p-0 max-h-[10rem] overflow-y-scroll">
									<Command>
										<CommandInput placeholder="Search Hostel..." />
										<CommandEmpty>No Course found.</CommandEmpty>
										<CommandGroup>
											{hostels.map((hostel) => (
												<CommandItem
													key={hostel.name}
													onSelect={(currentValue) => {
														setValue(
															currentValue === value ? "" : currentValue
														);
														setAdminDetails({
															...adminDetails,
															hostelallocated: currentValue
														})
														setOpen(false);
													}}
												>
													<Check
														className={`
                              										  mr-2 h-4 w-4
                                										${value === hostel.type
																? "opacity-100"
																: "opacity-0"
															}
                             								 `}
													/>
													{hostel.name}
												</CommandItem>
											))}
										</CommandGroup>
									</Command>
								</PopoverContent>
							</Popover>
							<Input
								type="text"
								name="address"
								value={adminDetails.address}
								className={`w-full h-12 bg-[#ecebf382] text-base `}
								onChange={handleInputChange}
								placeholder="Residentail Address"
							/>
						</div>
						<Button className='bg-[#6272B9] text-white mt-4 p-4 text-base w-[300px] flex justify-center text-center'>Submit Form</Button>
					</form>
				</div>
			</div>
		</>
	);
};

export default AdminForm;
