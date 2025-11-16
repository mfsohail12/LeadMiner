interface LeadTableProps {
  leads: Lead[];
  onGenerateEmail: (lead: Lead) => void;
  onExportCSV: () => void;
}

const LeadTable: React.FC<LeadTableProps> = ({
  leads,
  onGenerateEmail,
  onExportCSV,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6 border-b border-gray-200 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Generated Leads
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            {leads.length} leads found
          </p>
        </div>
        <button
          onClick={onExportCSV}
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
        >
          {/* <Download size={18} /> */}
          Export CSV
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Company
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Website
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {leads.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="px-6 py-12 text-center text-gray-500"
                >
                  No leads yet. Enter a keyword and click "Generate Leads" to
                  get started.
                </td>
              </tr>
            ) : (
              leads.map((lead: Lead) => (
                <tr
                  key={lead.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">
                      {lead.company_name}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <a
                      href={lead.website_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      {lead.website_url}
                    </a>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-gray-700">{lead.email}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-gray-600 text-sm max-w-xs truncate">
                      {lead.description}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => onGenerateEmail(lead)}
                      className="flex items-center gap-2 px-4 py-2 bg-[#ffde59] text-gray-900 rounded-lg hover:bg-[#ffd633] transition-colors font-medium text-sm"
                    >
                      {/* <Mail size={16} /> */}
                      Generate Email
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeadTable;
