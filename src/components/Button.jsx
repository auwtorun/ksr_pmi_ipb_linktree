import React, { useState } from "react";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "./Modal";

const Button = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [selectedData, setSelectedData] = useState(null);

  const content = [
    { name: "Guidebook", desc: "Buku panduan untuk KSR PMI IPB 2024/25", link: "https://ipb.link/guidebook-oprec-pimpinan-staff-ksr" },
    { name: "GFORM Oprec Pimpinan", desc: "Link untuk daftar Oprec Pimpinan", link: "https://docs.google.com/forms/d/1M3sU52gRy9T75Nsy7VwiAJ5_YpPGY53gqUKM3IR2by4/edit?usp=drivesdk" },
    { name: "GFORM Oprec Staff", desc: "Link untuk daftar Oprec Staff", link: "https://gforms.app/r/ku8wwTE" },
    {
      name: "Contact Us On Instagram!",
      desc: "Ada pertanyaan? Hubungi kami di Instagram", link: "https://www.instagram.com/ksr_pmi_ipb",
    },
    { name: "Email Us!", desc: "Hubungi kami di Email kami!!", link: "mailto:ksrpmiipb@gmail.com" },
  ];

  const handleOpenModal = (data) => {
    setSelectedData(data);
    setModalType("content");
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalType(null);
    setSelectedData(null);
  };

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center px-4 gap-y-2">
        {content.map((item, index) => (
          <button
            key={index}
            className="bg-[#3F4A74] font-moreSugar font-normal  relative hover:scale-[1.02] transition-all ease-in-out duration-500 w-full max-w-[480px] flex justify-center items-center rounded-full py-4 text-white"
          >
            <a className="h-full w-full" href={item.link} target="_blank" rel="noopener noreferrer">
              {item.name}
            </a>
            <span
              onClick={() => handleOpenModal(item)}
              className="absolute right-5 cursor-pointer z-10 w-6 h-6 flex justify-center items-center"
            >
              <FontAwesomeIcon
                icon={faEllipsisVertical}
                style={{ color: "#ffffff" }}
              />
            </span>
          </button>
        ))}
        <Modal
          type={modalType}
          selectedData={selectedData}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </>
  );
};

export default Button;
