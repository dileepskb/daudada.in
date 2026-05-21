import { useEffect } from "react";

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const InfoModal = ({ isOpen, onClose, title, content }: InfoModalProps) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/10">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full p-6">
        <h2 className="text-lg font-semibold mb-4">{title}</h2>
        <div className="text-sm text-gray-700 dark:text-gray-200">
          <div
            className="tablecontent"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
        <div className="mt-6 text-right">
          <button
            onClick={onClose}
            className="bg-indigo-500 text-white px-4 py-1 rounded hover:bg-indigo-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
