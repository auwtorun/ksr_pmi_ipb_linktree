import React, { useState } from "react";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "./Modal";

const Header = () => {
  const iconIpb = "/img/logo_ipb.png";
  const iconPmi = "/img/logo_pmi.png";
  const handleContext = (event) => {
    event.preventDefault();
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);

  const handleOpenModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalType(null);
  };

  return (
    <>
      <div className="flex relative flex-col justify-center items-center text-[#3F4A74]">
        <div className="flex relative flex-col justify-center items-center text-[#3F4A74] py-12 gap-y-4 w-max">
          {/* Button untuk membuka modal berbagi website */}
          <div
            onClick={() => handleOpenModal("website")}
            className="absolute rounded-full bg-black bg-opacity-30 hover:bg-opacity-20 transition-all ease-in-out duration-400 w-10 h-10 flex justify-center items-center top-5 right-5 cursor-pointer"
          >
            <FontAwesomeIcon icon={faEllipsis} style={{ color: "#ffffff" }} />
          </div>
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
                  />
                </div>
                <img
                  src={iconIpb}
                  draggable="false"
                  onContextMenu={handleContext}
                  className="w-12 h-12 sm:w-24 sm:h-24"
                  alt="Logo IPB"
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
        <Modal
          type={modalType}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </>
  );
};

export default Header;
