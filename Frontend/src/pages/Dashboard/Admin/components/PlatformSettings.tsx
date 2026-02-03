export default function PlatformSettings() {
  return (
    <div className="space-y-6">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-xl p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Platform Settings</h3>
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-gray-200 rounded-xl bg-gray-50 hover:bg-gray-100 hover:shadow-md hover:scale-[1.02] transition-all duration-300 gap-4">
            <div>
              <div className="font-semibold text-gray-900">Platform Commission</div>
              <div className="text-sm text-gray-600">Current rate applied to completed projects</div>
            </div>
            <div className="flex items-center gap-4 sm:ml-4">
              <input
                type="number"
                defaultValue="10"
                className="w-20 px-3 py-2 bg-white border border-gray-200 text-gray-900 rounded-lg text-center font-bold focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <span className="text-gray-600">%</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-gray-200 rounded-xl bg-gray-50 hover:bg-gray-100 hover:shadow-md hover:scale-[1.02] transition-all duration-300 gap-4">
            <div>
              <div className="font-semibold text-gray-900">Minimum Project Budget</div>
              <div className="text-sm text-gray-600">Minimum amount allowed for projects</div>
            </div>
            <div className="flex items-center gap-4 sm:ml-4">
              <span className="text-gray-600">$</span>
              <input
                type="number"
                defaultValue="50"
                className="w-24 px-3 py-2 bg-white border border-gray-200 text-gray-900 rounded-lg text-center font-bold focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
