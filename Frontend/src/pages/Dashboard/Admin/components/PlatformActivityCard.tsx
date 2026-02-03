export default function PlatformActivityCard() {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-xl p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Platform Activity</h3>
      <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 border border-gray-100 rounded-xl hover:bg-gray-100 hover:shadow-md hover:scale-[1.02] transition-all duration-300">
          <span className="text-gray-600">New Projects (Today)</span>
          <span className="font-bold text-cyan-600 text-xl">23</span>
        </div>
          <div className="flex items-center justify-between p-4 bg-gray-50 border border-gray-100 rounded-xl hover:bg-gray-100 hover:shadow-md hover:scale-[1.02] transition-all duration-300">
            <span className="text-gray-600">Completed Projects (Week)</span>
            <span className="font-bold text-cyan-600 text-xl">67</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-50 border border-gray-100 rounded-xl hover:bg-gray-100 hover:shadow-md hover:scale-[1.02] transition-all duration-300">
          <span className="text-gray-600">Platform Commission (Month)</span>
          <span className="font-bold text-cyan-600 text-xl">₹28,492</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="text-center p-4 bg-blue-100 border border-blue-300 rounded-xl hover:bg-blue-200 hover:shadow-lg hover:scale-105 transition-all duration-300">
            <div className="text-2xl font-bold text-blue-600">4,238</div>
            <div className="text-sm text-gray-600">Active Freelancers</div>
          </div>
          <div className="text-center p-4 bg-green-100 border border-green-300 rounded-xl hover:bg-green-200 hover:shadow-lg hover:scale-105 transition-all duration-300">
            <div className="text-2xl font-bold text-green-600">8,609</div>
            <div className="text-sm text-gray-600">Active Clients</div>
          </div>
        </div>
      </div>
    </div>
  );
}
