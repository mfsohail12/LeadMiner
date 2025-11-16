interface LeadInputProps {
  keyword: string;
  isGenerating: boolean;
  onKeywordChange: (value: string) => void;
  onGenerate: () => void;
}

const LeadInput: React.FC<LeadInputProps> = ({
  keyword,
  isGenerating,
  onKeywordChange,
  onGenerate,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Keyword or Description
          </label>
          <div className="relative">
            {/* <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} /> */}
            <input
              type="text"
              value={keyword}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onKeywordChange(e.target.value)
              }
              placeholder="e.g., AI startups in healthcare"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffde59] focus:border-transparent outline-none transition-all"
            />
          </div>
        </div>
        <div className="flex items-end">
          <button
            onClick={onGenerate}
            disabled={isGenerating || !keyword}
            className="w-full sm:w-auto px-8 py-3 bg-[#ffde59] text-gray-900 rounded-lg hover:bg-[#ffd633] disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed transition-all font-semibold shadow-sm hover:shadow-md"
          >
            {isGenerating ? "Generating..." : "Generate Leads"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeadInput;
