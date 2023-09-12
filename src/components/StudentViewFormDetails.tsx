import StudentViewFormContent from "./StudentViewFormContent";
import StudentImage from "../assets/student.png";

const StudentViewFormDetails = () => {
  return (
    <>
      <div className="w-[95%] my-8 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="w-[30%]">
            <img src={StudentImage} alt="" />
          </div>
          <div className="lg:w-[60%] xl:w-[40%]">
            <StudentViewFormContent detail="Name" content="Ayodele Precious" />
            <StudentViewFormContent detail="Mat no" content="U2019/665366" />
            <StudentViewFormContent detail="Level" content="300" />
            <StudentViewFormContent detail="Phone No" content="0815462365363" />
            <StudentViewFormContent
              detail="Department"
              content="Computer Science"
            />
            <StudentViewFormContent
              detail="Parents Name"
              content="Mr and Mrs Ayodele"
            />
          </div>
        </div>
        <div className="grid gap-[8px] md:grid-cols-2 xl:grid-cols-3">
          <StudentViewFormContent
            detail="Parents No"
            content="Ayodele Precious"
          />
          <StudentViewFormContent
            detail="Address"
            content="2 Omikunke Street Lagos"
          />
          <StudentViewFormContent detail="Name" content="Ayodele Precious" />
          <StudentViewFormContent detail="Name" content="Ayodele Precious" />
          <StudentViewFormContent detail="Name" content="Ayodele Precious" />
          <StudentViewFormContent detail="Name" content="Ayodele Precious" />
          <StudentViewFormContent detail="Name" content="Ayodele Precious" />
          <StudentViewFormContent detail="Name" content="Ayodele Precious" />
          <StudentViewFormContent detail="Name" content="Ayodele Precious" />
        </div>
      </div>
    </>
  );
};

export default StudentViewFormDetails;
