import React from "react";

const Header = () => {
  const iconIpb = "/img/logo_ipb.png";
  const iconPmi = "/img/logo_pmi.png";
  const handleContext = (event) => {
    event.preventDefault();
  };
  return (
    <>
      {/* <div className="flex flex-col justify-center items-center gap-y-4 py-12">
        <img src={iconIpb} className="w-24 h-24" alt="" srcSet="" />
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-white text-xl">
            KSR PMI IPB 2024/2025
          </h1>
          <p className="text-gray-200 text-sm w-1/3 text-center">
            KORPS SUKARELA PALANG MERAH INDONESIA IPB UNIVERSITY
          </p>
        </div>
      </div> */}
      <div className="flex flex-col justify-center items-center text-[#3F4A74] py-12 gap-y-4">
        <div className="flex flex-row justify-center items-center">
          <div className="border-r-2 sm:border-r-4 border-black p-4">
            <div className="flex flex-row gap-x-4">
              <div className="w-12 h-12 sm:w-24 sm:h-24 flex-shrink-0 bg-white rounded-full flex justify-center items-center">
                <img
                  src={iconPmi}
                  draggable="false"
                  onContextMenu={handleContext}
                  className="w-10 h-10 sm:w-20 sm:h-20"
                  alt="Logo PMI"
                  srcset=""
                />
              </div>
              <img
                src={iconIpb}
                draggable="false"
                onContextMenu={handleContext}
                className="w-12 h-12 sm:w-24 sm:h-24"
                alt="Logo IPB"
                srcset=""
              />
            </div>
          </div>
          <div className="px-4 font-semibold text-sm sm:text-base">
            <p>KORPS SUKARELA</p>
            <p>PALANG MERAH INDONESIA</p>
            <p>IPB UNIVERSITY</p>
          </div>
        </div>
        <div>
          <p className="text-xl font-">KSR PMI IPB 2024/2025</p>
        </div>
      </div>
    </>
  );
};

export default Header;
