import { StudentDetail } from "../interface";

const StudentViewFormContent = ({ detail, content }: StudentDetail) => {
  return (
    <div className="my-4 w-full md:max-w-[490px]">
      <div className="flex">
        <p className="bg-[#e9edfe80] p-4 w-[150px]">{detail}</p>
        <p className="bg-[#E9EDFE] py-4 pl-6 w-full md:max-w-[320px]">
          {content}
        </p>
      </div>
    </div>
  );
};

export default StudentViewFormContent;
