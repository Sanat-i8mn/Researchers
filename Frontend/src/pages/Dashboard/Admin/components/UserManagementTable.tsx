interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  verified: boolean;
  joined: string;
  status: string;
}

export default function UserManagementTable({ users }: { users: User[] }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-xl p-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <select className="px-4 py-2 bg-white border border-gray-200 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600">
            <option>All Roles</option>
            <option>Clients</option>
            <option>Freelancers</option>
          </select>
          <select className="px-4 py-2 bg-white border border-gray-200 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600">
            <option>All Status</option>
            <option>Active</option>
            <option>Pending</option>
            <option>Suspended</option>
          </select>
        </div>
        <input
          type="text"
          placeholder="Search users..."
          className="px-4 py-2 bg-white border border-gray-200 text-gray-900 placeholder-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 w-full sm:w-64"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-b border-gray-200">
            <tr className="text-left">
              <th className="pb-3 font-semibold text-gray-600">User</th>
              <th className="pb-3 font-semibold text-gray-600">Email</th>
              <th className="pb-3 font-semibold text-gray-600">Role</th>
              <th className="pb-3 font-semibold text-gray-600">Status</th>
              <th className="pb-3 font-semibold text-gray-600">Joined</th>
              <th className="pb-3 font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 hover:scale-[1.01] transition-all duration-200">
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold shadow-lg">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="font-medium text-gray-900">{user.name}</span>
                  </div>
                </td>
                <td className="py-4 text-gray-600">{user.email}</td>
                <td className="py-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 border border-blue-300 rounded-lg text-xs font-semibold capitalize">
                    {user.role}
                  </span>
                </td>
                <td className="py-4">
                  <span className={`px-3 py-1 rounded-lg text-xs font-semibold border ${
                    user.status === 'active' ? 'bg-green-100 text-green-600 border-green-300' : 'bg-yellow-100 text-yellow-600 border-yellow-300'
                  }`}>
                    {user.status}
                  </span>
                </td>
                <td className="py-4 text-gray-600">{user.joined}</td>
                <td className="py-4">
                  <div className="flex gap-2">
                    <button className="text-cyan-600 font-semibold hover:text-cyan-700 text-sm">
                      View
                    </button>
                    <button className="text-red-600 font-semibold hover:text-red-700 text-sm">
                      Suspend
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
