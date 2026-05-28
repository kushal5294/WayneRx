import { CheckCircle, XCircle } from "lucide-react";
import { useModalStore } from "../../store/modalStore";

export const StatusModal = () => {
  const { isModalOpen, closeModal, modalContent } = useModalStore();

  if (!isModalOpen) {
    return null;
  }

  const handleClose = () => {
    closeModal();
    if (modalContent.status === "success") {
      window.location.reload();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center items-center"
      onClick={handleClose}
    >
      <div
        className="bg-white p-8 rounded-lg shadow-xl text-center max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        {modalContent.status === "success" ? (
          <CheckCircle className="text-green-500 w-16 h-16 mx-auto mb-4" />
        ) : (
          <XCircle className="text-red-500 w-16 h-16 mx-auto mb-4" />
        )}
        <h2 className="text-2xl font-bold mb-4">{modalContent.title}</h2>
        <p className="mb-6">{modalContent.message}</p>
        <button
          onClick={handleClose}
          className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};
