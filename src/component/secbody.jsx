import bill from "../../src/images/billing.png";
import grencal from "../../src/images/greencalender.png";
import soc from "../../src/images/social.png";
const Secbody = () => {
  return (
    <div className="bg-white   ">
      <div className="flex justify-center pt-[134px] ">
        <div className="     ">
          <p className="font-buenos-aires font-bold text-[48px] leading-[62.4px] text-center">
            Our Success
          </p>
          <p className="font-[400px] text-[#010514CC] text-opacity-[80%]  text-[18px] leading-[28.8px] max-sm:pl-[5%] font-buenos-aires pt-[16px] max-md:text-center">
            Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae
            sollicitudin at nec <br /> nam et pharetra gravida. Adipiscing a
            quis ultrices eu ornare tristique vel nisl orci.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap px-[20px]  justify-center   items-center pt-[101px] gap-[95px]         ">
        <div className=" flex flex-col   justify-center items-center">
          <p className="grad  font-buenos-aires font-[300px]    text-[96px] leading-[96px] ">
            15k
          </p>
          <p className="  font-buenos-aires font-[400px]  text-[32px]  leading-[41.6px] text-center   ">
            Students
          </p>
        </div>
        <div className=" flex flex-col   justify-center items-center">
          <p className="grad  font-buenos-aires font-[300px]  text-[96px] leading-[96px] ">
            75%
          </p>
          <p className="  font-buenos-aires font-[400px]  text-[32px]  leading-[41.6px] text-center   ">
            Total success
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="grad  font-buenos-aires font-[300px]  text-[96px] leading-[96px] text-center ">
            35
          </p>
          <p className=" text-center font-buenos-aires font-[400px] text-[32px] leading-[41.6px]   ">
            Main questions
          </p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <p className="grad  font-buenos-aires font-[300px]  text-[96px] leading-[96px] text-center  ">
            26
          </p>
          <p className=" text-center font-buenos-aires font-[400px] text-[32px]  leading-[41.6px]   ">
            Cheif experts
          </p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <p className="grad  font-buenos-aires font-[300px]  text-[96px] leading-[96px] text-center  ">
            16
          </p>
          <p className=" text-center  font-buenos-aires font-[400px] text-[32px] leading-[41.6px]   ">
            years of experience
          </p>
        </div>
      </div>

      <div className="flex justify-center text-center pt-[131px] max-lg:items-center ">
        <div>
          <p className="font-poppins text-[#2F327D] font-[700px] text-[36px] leading-[64.8px] max-sm:text-[28px] max-sm:pl-[4%] ">
            All-In-One <span className="text-[#00CBB8]"> Cloud Software. </span>{" "}
          </p>
          <div>
            <p className=" text-[#696984] font-poppins font-[400px] text-[24px] leading-[43.2px] max-sm:pl-[5%]  ">
              TOTC is one powerful online software suite that combines all the
              tools <br /> needed to run a successful school or office.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center   gap-[60px] max-sm:pt-[70px] max-sm:pl-[10%]  pt-[140px] flex-wrap max-  ">
        <div className="w-[450px]   flex  flex-col justify-center items-center   rounded-[20px] shadow-xl      ">
          {" "}
          <img className="      w-[100px] h-[100px]  " src={bill} alt="" />
          <div className="">
            <p className=" font-poppins font-medium text-[30px] leading-[36px] text-[#2F327D] text-center max-sm:pt-[30px] pt-[79px] max-sm:pl-[5%]  ">
              Online Billing, <br /> Invoicing, & Contracts
            </p>
            <p className="text-[#696984] font-[400px] text-[20px] leading-[36px] pt-[24px] text-center  max-sm:pl-[5%] ">
              Simple and secure control of your <br /> organization’s financial
              and legal <br /> transactions. Send customized <br /> invoices and
              contracts
            </p>
          </div>
        </div>

        <div className=" ">
          <div className="w-[450px] flex flex-col justify-center items-center    rounded-[20px] shadow-xl  ">
            <img className="   w-[100px] h-[100px] " src={grencal} alt="" />
            <p className="font-poppins font-medium text-[30px] leading-[45px] pt-[79px] text-center text-[#2F327D]  max-sm:pt-[30px]   max-sm:pl-[5%]  ">
              Easy Scheduling & Attendance Tracking
            </p>
            <p className="font-poppins font-[400px] text-[20px] leading-[36px]  pt-[24px]  text-center max-sm:pt-[30px]   max-sm:pl-[5%]  text-[#696984]">
              Schedule and reserve classrooms at <br /> one campus or multiple
              campuses. <br /> Keep detailed records of student <br />{" "}
              attendance
            </p>
          </div>
        </div>

        <div>
          <div className=" flex flex-col rounded-[20px] shadow-xl w-[450px] justify-center items-center   ">
            <img className="" src={soc} width={100} height={100} alt="" />
            <p className="font-poppins font-medium text-[30px] leading-[45px] text-[#2F327D] text-center max-sm:pt-[30px]   max-sm:pl-[5%]  pt-[106px] ">
              Customer Tracking
            </p>
            <p className="font-poppins font-[400px] text-[20px] leading-[36px] text-[#696984] pt-[42px] text-center">
              Automate and track emails to <br /> individuals or groups.
              Skilline’s <br /> built-in system helps organize <br /> your
              organization
            </p>
          </div>
        </div>
      </div>

      <div className=" flex flex-col justify-center items-center ">
        <div className="flex justify-center pt-[158px]  ">
          <p className="text-[#2F327D] font-[600px] text-[44px]     leading-[79.2px] ">
            What is{" "}
          </p>
          <p className="text-[#00CBB8] leading-[79.2px] font-[600px]   text-[44px] ">
            TOTC?
          </p>
        </div>
        <div className="flex justify-center lg:w-[57.3%] sm:w-[80%] w-[90%] pt-[20px] text-center items-center">
          <p className="sm:text-center text-left pl-[25px] font-poppins font-[400px] text-[24px] sm:leading-[43.2px] max-sm:pt-[30px]   max-sm:pl-[5%]   text-[#696984]">
            TOTC is a platform that allows educators to create online classes
            whereby they can store the course materials online; manage
            assignments, quizzes and exams; monitor due dates; grade results and
            provide students with feedback all in one place.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-[100px] pt-[77px] ">
        <div className="lb   bg-no-repeat  w-[600px] h-[400px]  flex justify-center items-center ">
          <div>
            <p className="font-poppins font-[600px] text-[32px] leading-[48px] text-white">
              FOR INSTRUCTORS
            </p>
            <div className="pt-[17px]">
              <button className="w-[283px]  h-[80px] bg-transparent rounded-[80px] border-[1px] border-white font-[500px] text-[22px] text-white ">
                Start a class today
              </button>
            </div>
          </div>
        </div>
        <div className="sg w-[600px] h-[400px] flex justify-center items-center">
          <div className=" ">
            <p className="text-white font-poppins font-[600px] text-[32px] leading-[48px] pl-[20px]  ">
              FOR STUDENTS
            </p>
            <div className="pt-[17px]">
              <button className="w-[283px] h-[80px] bg-[#23BDEEE5] rounded-[80px] bg-opacity-[90%] text-white font-[500px] text-[22px] leading-[33px] ">
                Enter access code
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Secbody;
