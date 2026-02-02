interface Project {
  id: number;
  title: string;
  client: string;
  freelancer: string | null;
  amount: number;
  status: string;
  date: string;
}

export default function RecentProjectsTable({ projects }: { projects: Project[] }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-xl p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Projects</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-b border-gray-200">
            <tr className="text-left">
              <th className="pb-3 font-semibold text-gray-600">Project</th>
              <th className="pb-3 font-semibold text-gray-600">Client</th>
              <th className="pb-3 font-semibold text-gray-600">Freelancer</th>
              <th className="pb-3 font-semibold text-gray-600">Amount</th>
              <th className="pb-3 font-semibold text-gray-600">Status</th>
              <th className="pb-3 font-semibold text-gray-600">Date</th>
            </tr>
          </thead>
          <tbody>
            {projects.map(project => (
              <tr key={project.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 hover:scale-[1.01] transition-all duration-200">
                <td className="py-4 font-medium text-gray-900">{project.title}</td>
                <td className="py-4 text-gray-600">{project.client}</td>
                <td className="py-4 text-gray-600">{project.freelancer || '-'}</td>
                <td className="py-4 font-semibold text-cyan-600">₹{project.amount.toLocaleString()}</td>
                <td className="py-4">
                  <span className={`px-3 py-1 rounded-lg text-xs font-semibold ${
                    project.status === 'completed' ? 'bg-green-100 text-green-600 border border-green-300' :
                    project.status === 'in-progress' ? 'bg-blue-100 text-blue-600 border border-blue-300' :
                    'bg-yellow-100 text-yellow-600 border border-yellow-300'
                  }`}>
                    {project.status}
                  </span>
                </td>
                <td className="py-4 text-gray-600">{project.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
