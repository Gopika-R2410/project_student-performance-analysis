import React from "react";
import Admin_Navbar from "../../../Components/Admin_Navbar";
import CornerProfileLogoutSectionadmin from "./CornerProfileLogoutSectionadmin";

function AdminHistory() {
  return (
    <div className=" relative h-screen w-[100%]">
      <Admin_Navbar />
      <div className=" lg:absolute  h-screen lg:w-[82%] lg:ml-[18%] p-5 ">
        {/*Corner Profile Option*/}
        <CornerProfileLogoutSectionadmin />
        <div className="px-4 py-5 bg-white shadow-[0px_1.6px_3.6px_0px_rgba(27,33,45,0.13),0px_0.3px_0.9px_0px_rgba(27,33,45,0.10)]">
          <div className=" text-lg  font-semibold ">Request History</div>
        </div>
       
      </div>
    </div>
  );
}

export default AdminHistory;