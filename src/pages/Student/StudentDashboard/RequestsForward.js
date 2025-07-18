import React from "react";
import Student_Navbar from "../../../Components/Student_Navbar";
import CornerProfileLogoutSection from "./CornerProfileLogoutSection";

function RequestsForward() {
  
  return (
    <div className=" relative h-screen w-[100%]">
      <Student_Navbar />
      <div className=" lg:absolute  h-screen lg:w-[82%] lg:ml-[18%] p-5 ">
        {/*Corner Profile Option*/}
        <CornerProfileLogoutSection />
        <div className="px-3 py-5 bg-white shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)]">
          <div className=" text-lg font-semibold ">Request Forwards</div>
        </div>
      <div className="flex justify-center py-10 text-xl font-extrabold"> You have no any Forwarded Request</div>
      </div>
    </div>
  );
} 

export default RequestsForward;