import { FormEvent, useState } from 'react'
import { Input } from "./ui/input";
import { handleAdminFormUpload } from '../services/adminForm';
import { Button } from './ui/button';
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

			const { errorMessage } = await handleAdminFormUpload(adminDetails, userId)
			if (errorMessage) {
				return
			}
			console.log('Admin Details Uploaded');


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
							<Input
								type="text"
								name="hostelallocated"
								value={adminDetails.hostelallocated}
								className={`w-full h-12 bg-[#ecebf382] text-base `}
								onChange={handleInputChange}
								placeholder="Hostel Allocated"
							/>
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
