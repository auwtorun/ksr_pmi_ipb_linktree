import React from "react";
import { Share, X } from "lucide-react";

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

  const formattedLink = selectedData?.link?.startsWith("mailto:")
    ? selectedData.link.replace("mailto:", "")
    : selectedData?.link || "Link URL";

  if (!isOpen) return null; // Jangan render modal jika tidak aktif

  return (
    <div className="bg-black bg-opacity-75 fixed top-0 left-0 w-screen h-screen flex items-end md:items-center justify-center z-20">
      <div className="bg-white relative flex flex-col justify-between px-8 py-10 items-center w-full md:w-1/3 md:min-w-96 h-2/3 md:h-3/4 bottom-0 rounded-t-2xl md:rounded-2xl gap-y-4 animate-slide-up md:animate-none">
        <X
          className="absolute top-4 right-5 cursor-pointer"
          onClick={onClose}
        />
        <h1 className="text-lg font-semibold">Share Link</h1>
        <div className="w-full bg-white border-2 hover:scale-[1.02] transition-all ease-out duration-300 drop-shadow-lg hover:drop-shadow-2xl h-48 rounded-xl flex items-center justify-center">
          <a
            href={selectedData?.link}
            className="flex flex-col justify-center items-center text-black line-clamp-1 w-full h-full"
          >
            <h1 className="text-2xl font-semibold">{selectedData?.name}</h1>
            <p className="text-sm">{formattedLink}</p>
          </a>
        </div>
        <div className="w-full flex justify-center">
          <button
            onClick={handleShare}
            className="flex flex-row relative justify-center items-center hover:scale-[1.02] transition-all ease-in-out duration-500 bg-[#3F4A74] px-4 text-white h-14 w-full md:max-w-[320px] rounded-lg"
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
