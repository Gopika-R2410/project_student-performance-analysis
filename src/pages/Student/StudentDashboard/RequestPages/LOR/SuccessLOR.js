import React from "react";
import Student_Navbar from "../../../../../Components/Student_Navbar";
import CornerProfileLogoutSection from "../../CornerProfileLogoutSection";
import { Link } from "react-router-dom";

function SuccessLOR() {
  return (
    <div className=" relative h-screen w-[100%]">
      <Student_Navbar />
      <div className=" lg:absolute flex flex-col  h-screen lg:w-[82%] lg:ml-[18%] p-5 ">
        {/*Corner Profile Option*/}
        <CornerProfileLogoutSection />
        <div className="flex justify-center items-center h-full">
          <div className="bg-white px-10 w-[400px] pb-9 pt-9 shadow-[0_4px_8px_2px_rgba(0,0,0,0.16)] ">
            <div>
              <p className="text-[#107C10] text-base">
                Your request has been Submitted Successfully
              </p>
              <ul className="text-[#494D57] text-sm flex flex-col gap-3 mt-6 list-disc">
                <li>Check history to Track your requests</li>
                <li>It will be reflected in your profile once validated by the concerned authority</li>
              </ul>
            </div>

            <div className="flex flex-col items-center mt-12">
              <Link to={"/StudentDashboard/History"}>
                <button className=" inline-flex items-center p-2 bg-[#2164E8] text-white rounded-sm px-5">
                  Check History
                </button>
              </Link>
              <Link to={"/StudentDashboard/Request"} className="text-[#2164E8] mt-2">Add another request</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessLOR;