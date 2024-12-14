import React from "react";
import { Share, X, Copy } from "lucide-react";

const Modal = ({ isOpen, type, selectedData, onClose }) => {
  const handleShare = async () => {
    try {
      // Buat salinan link
      let shareLink = selectedData?.link || "https://example.com";
  
      // Jika link diawali "mailto:", potong "mailto:"
      if (shareLink.startsWith("mailto:")) {
        shareLink = shareLink.replace("mailto:", "");
      }
  
      if (type === "content") {
        await navigator.share({
          title: selectedData?.name || "Default Content Title",
          text: selectedData?.desc || "Check out this content!",
          url: shareLink,
        });
      } else if (type === "website") {
        await navigator.share({
          title: "KSR PMI IPB Website",
          text: "Check out the KSR PMI IPB website!",
          url: "https://ksr-pmi-ipb-linktree.vercel.app/",
        });
      }
  
      console.log("Share was successful.");
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  const handleCopy = async (link) => {
    try {
      // Berikan nilai default jika link undefined
      let validLink = link || "https://ksr-pmi-ipb-linktree.vercel.app/";
  
      // Periksa jika link dimulai dengan "mailto:"
      if (validLink.startsWith("mailto:")) {
        validLink = validLink.replace("mailto:", ""); // Hapus "mailto:"
      }
  
      // Salin link ke clipboard
      await navigator.clipboard.writeText(validLink);
      console.log("Link copied:", validLink);
    } catch (error) {
      console.error("Failed to copy link:", error);
    }
  };

  if (!isOpen) return null;

  // Proses link untuk tampilan
  const displayLink = selectedData?.link?.startsWith("mailto:")
    ? selectedData?.link.replace("mailto:", "")
    : selectedData?.link;

  return (
    <div className="bg-black bg-opacity-75 fixed top-0 left-0 w-screen h-screen flex items-end md:items-center justify-center z-20">
      <div className="bg-white relative flex flex-col justify-around md:justify-between px-8 py-10 items-center w-full md:w-1/3 md:min-w-96 h-3/4 bottom-0 rounded-t-2xl md:rounded-2xl gap-y-4 animate-slide-up md:animate-none">
        <X className="absolute top-4 right-5 cursor-pointer" onClick={onClose} />
        <h1 className="text-lg font-semibold">
          {type === "content" ? "Share Content" : "Share Website"}
        </h1>
        <div className="w-full bg-white border-2 hover:scale-[1.02] transition-all ease-out duration-300 drop-shadow-lg hover:drop-shadow-2xl h-48 rounded-xl flex items-center justify-center">
          {type === "content" ? (
            <a
              href={selectedData?.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center w-full h-full flex flex-col justify-center items-center"
            >
              <h1 className="text-2xl font-semibold">{selectedData?.name}</h1>
              {/* Tampilkan link tanpa "mailto:" */}
              <p className="text-sm line-clamp-1 w-full px-12">{displayLink || "No link available"}</p>
            </a>
          ) : (
            <a
              href="https://ksr-pmi-ipb-linktree.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center w-full h-full flex flex-col justify-center items-center"
            >
              <h1 className="text-2xl font-semibold">KSR PMI IPB Website</h1>
              <p className="text-sm">https://ksr-pmi-ipb-linktree.vercel.app/</p>
            </a>
          )}
        </div>
        <div className="w-full flex flex-col items-center gap-y-4 justify-center">
          <button
            onClick={() => handleCopy(selectedData?.link)}
            className="flex flex-row relative justify-center items-center hover:scale-[1.02] transition-all ease-in-out duration-500 bg-[#3F4A74] px-4 text-white h-14 w-full md:max-w-[320px] rounded-lg"
          >
            <p>Copy</p>
            <Copy className="absolute right-5" />
          </button>
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

