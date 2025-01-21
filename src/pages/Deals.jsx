function Deals() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Deals</h1>
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-medium text-gray-900">Deal Pipeline</h2>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              New Deal
            </button>
          </div>
        </div>
        <div className="px-4 py-5 sm:p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Lead Column */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-4">Leads</h3>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded shadow">
                  <h4 className="font-medium">New Software Project</h4>
                  <p className="text-sm text-gray-500">$25,000</p>
                </div>
              </div>
            </div>

            {/* Contact Made Column */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-4">Contact Made</h3>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded shadow">
                  <h4 className="font-medium">Website Redesign</h4>
                  <p className="text-sm text-gray-500">$15,000</p>
                </div>
              </div>
            </div>

            {/* Proposal Column */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-4">Proposal</h3>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded shadow">
                  <h4 className="font-medium">Mobile App Development</h4>
                  <p className="text-sm text-gray-500">$50,000</p>
                </div>
              </div>
            </div>

            {/* Closed Column */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-4">Closed</h3>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded shadow">
                  <h4 className="font-medium">Cloud Migration</h4>
                  <p className="text-sm text-gray-500">$35,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deals;