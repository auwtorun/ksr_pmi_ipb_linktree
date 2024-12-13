import React from 'react';
import { Share, X } from 'lucide-react';

const Modal = ({ selectedData, isOpen, onClose }) => {
  const handleShare = async () => {
    try {
      await navigator.share({
        title: selectedData?.name || "Title of the share",
        text: "Check out this content!",
        url: selectedData?.link || "https://example.com", // Ganti dengan data yang sesuai
      });
      console.log("Share was successful.");
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  if (!isOpen) return null; // Jangan render modal jika tidak aktif

  return (
    <div className="bg-black bg-opacity-75 fixed top-0 left-0 w-screen h-screen flex items-end z-20">
      <div className="bg-white relative flex flex-col justify-center p-6 items-center w-full h-2/3 bottom-0 rounded-t-2xl gap-y-4">
        <X className="absolute top-5 right-5 cursor-pointer" onClick={onClose} />
        <div className="w-full border-2 border-red-500 h-48 rounded-xl flex items-center justify-center">
          <p className="text-gray-500"></p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-xl font-semibold">{selectedData?.name || "Title"}</h1>
          <p className="text-sm text-gray-500">
            {selectedData?.desc || "Deskripsi"}
          </p>
        </div>
        <div className="w-full">
          <button
            onClick={handleShare}
            className="flex flex-row relative justify-center items-center bg-[#3F4A74] px-4 text-white h-14 w-full rounded-lg"
          >
            <p>Share</p>
            <Share className="absolute right-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
