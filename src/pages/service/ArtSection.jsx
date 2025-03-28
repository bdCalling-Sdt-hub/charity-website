import React from "react";

const ArtSection = () => {
  return (
    <div className="relative max-w-[1520px] mx-auto   ">
      <div>
        <h1 className=" lg:text-[124px] text-2xl leading-none p-2 ">
          Art & antique <br />
        </h1>
        <span className=" lg:text-7xl   ">auction</span>
      </div>
      <div className="flex justify-center">
        <img src="./art-2.png" alt="" />
      </div>


      <div className="  absolute right-0 top-0 mx-auto ">
        <div>
          <img src="./art-1.png" alt="" />
        </div> 
      </div>
    </div>
  );
};

export default ArtSection;