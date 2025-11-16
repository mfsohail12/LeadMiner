interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  emailContent: string;
  leadName?: string;
}

const EmailModal: React.FC<EmailModalProps> = ({
  isOpen,
  onClose,
  emailContent,
  leadName,
}) => {
  if (!isOpen) return null;

  const copyToClipboard = (): void => {
    navigator.clipboard.writeText(emailContent);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900">
            Outreach Email for {leadName}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          ></button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(80vh-140px)]">
          <div className="bg-gray-50 rounded-lg p-4 whitespace-pre-wrap text-gray-700 font-mono text-sm">
            {emailContent}
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-200">
          <button
            onClick={copyToClipboard}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
          >
            Copy to Clipboard
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#ffde59] text-gray-900 rounded-lg hover:bg-[#ffd633] transition-colors font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailModal;
