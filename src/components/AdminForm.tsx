import { FormEvent, useState } from 'react'
import { Input } from "./ui/input";
interface UserDetails {
	userDetails: {
		full_name: string;
		staffid: string;
		email: string;
	},
	userId: string
}
const AdminForm = ({ userDetails, userId }: UserDetails) => {
	console.log(userDetails);

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

			} catch (error) {

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
								<p className='mt-2 ml-2'>{userDetails.full_name}</p>
							</div>
							<div className={`w-full h-12 bg-[#ecebf382] text-base `}>
								<p className='mt-2 ml-2'>{userDetails.staffid}</p>
							</div>
						</div>
						<div className="md:grid w-full md:grid-cols-2 gap-4 md:gap-8 mt-4 flex flex-col">
							<div className={`w-full h-12 bg-[#ecebf382] text-base `}>
								<p className='mt-2 ml-2'>{userDetails.email}</p>
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
					</form>
				</div>
			</div>
		</>
	);
};

export default AdminForm;
