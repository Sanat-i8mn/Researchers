interface Verification {
  id: number;
  freelancer: string;
  type: string;
  submittedDate: string;
  documents: number;
}

export default function VerificationWorkflow({ verifications }: { verifications: Verification[] }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-xl p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Pending Verifications ({verifications.length})</h3>
      <div className="space-y-4">
        {verifications.map(verification => (
          <div key={verification.id} className="flex items-center justify-between p-6 border border-gray-200 rounded-xl hover:border-cyan-300 transition-all bg-gray-50 hover:bg-gray-100 hover:shadow-lg hover:scale-[1.02] duration-300 cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                {verification.freelancer}
              </div>
              <div>
                <div className="font-bold text-gray-900 mb-1">{verification.type} Verification</div>
                <div className="text-sm text-gray-600">Submitted {verification.submittedDate} • {verification.documents} documents</div>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="bg-cyan-100 text-cyan-600 border border-cyan-300 px-6 py-2 rounded-xl font-semibold hover:bg-cyan-200 hover:scale-105 hover:shadow-md transition-all duration-200">
                Review
              </button>
              <button className="bg-green-100 text-green-600 border border-green-300 px-6 py-2 rounded-xl font-semibold hover:bg-green-200 hover:scale-105 hover:shadow-md transition-all duration-200">
                Approve
              </button>
              <button className="bg-red-100 text-red-600 border border-red-300 px-6 py-2 rounded-xl font-semibold hover:bg-red-200 hover:scale-105 hover:shadow-md transition-all duration-200">
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
