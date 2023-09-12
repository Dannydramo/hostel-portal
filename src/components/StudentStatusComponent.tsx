

const StudentStatusComponent = () => {
	return (
		<>
			<div className="w-[95%] mx-auto">
				<div className="h-[60px] py-6">
					<p className="text-2xl">Welcome Precious</p>
				</div>

				<div className="my-4">
					<h1 className="mb-4">Profile</h1>
					<div className="">
						<p>
							Dear Precious you have been succesfully approved by warden for
							clarification.
						</p>
						<p className="my-8">
							<span className="font-bold mr-2 text-base md:text-xl">Name:</span>
							<span>Precious</span>
						</p>
						<p className="my-8">
							<span className="font-bold mr-2 text-base md:text-xl">
								Department :
							</span>
							<span>Computer Science</span>
						</p>
						<p className="my-8">
							<span className="font-bold mr-2 text-base md:text-xl">
								Matric Number :
							</span>
							<span>DE 2019/8090</span>
						</p>
						<p className="my-8">
							<span className="font-bold mr-2 text-base md:text-xl">
								Status :
							</span>
							<span>Cleared</span>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default StudentStatusComponent;
