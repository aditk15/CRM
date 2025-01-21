import { useState } from 'react';

function Leads() {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const employees = [
    {
      id: 1,
      name: 'John Doe',
      position: 'Sales Representative',
      leads: [
        { id: 1, company: 'Tech Corp', status: 'Qualified', value: '$50,000' },
        { id: 2, company: 'Innovation Inc', status: 'Negotiation', value: '$75,000' },
        { id: 3, company: 'Digital Solutions', status: 'Proposal', value: '$60,000' },
        { id: 4, company: 'Future Systems', status: 'Initial Contact', value: '$45,000' },
        { id: 5, company: 'Smart Tech', status: 'Qualified', value: '$55,000' }
      ]
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'Senior Sales Executive',
      leads: [
        { id: 6, company: 'Global Solutions', status: 'Proposal', value: '$100,000' },
        { id: 7, company: 'Digital Dynamics', status: 'Closed Won', value: '$60,000' },
        { id: 8, company: 'Tech Innovators', status: 'Negotiation', value: '$85,000' },
        { id: 9, company: 'Cloud Systems', status: 'Qualified', value: '$70,000' },
        { id: 10, company: 'Data Corp', status: 'Initial Contact', value: '$65,000' }
      ]
    },
    {
      id: 3,
      name: 'Michael Johnson',
      position: 'Account Executive',
      leads: [
        { id: 11, company: 'Enterprise Solutions', status: 'Proposal', value: '$90,000' },
        { id: 12, company: 'Tech Leaders', status: 'Negotiation', value: '$120,000' },
        { id: 13, company: 'Innovation Labs', status: 'Qualified', value: '$80,000' },
        { id: 14, company: 'Digital Enterprises', status: 'Initial Contact', value: '$95,000' },
        { id: 15, company: 'Future Tech', status: 'Proposal', value: '$110,000' }
      ]
    },
    {
      id: 4,
      name: 'Sarah Wilson',
      position: 'Sales Manager',
      leads: [
        { id: 16, company: 'Cloud Innovations', status: 'Closed Won', value: '$150,000' },
        { id: 17, company: 'Tech Solutions', status: 'Negotiation', value: '$130,000' },
        { id: 18, company: 'Digital Systems', status: 'Proposal', value: '$140,000' },
        { id: 19, company: 'Smart Solutions', status: 'Qualified', value: '$125,000' },
        { id: 20, company: 'Data Systems', status: 'Initial Contact', value: '$135,000' }
      ]
    },
    {
      id: 5,
      name: 'David Brown',
      position: 'Business Development Representative',
      leads: [
        { id: 21, company: 'Tech Ventures', status: 'Qualified', value: '$70,000' },
        { id: 22, company: 'Innovation Tech', status: 'Proposal', value: '$85,000' },
        { id: 23, company: 'Digital Ventures', status: 'Negotiation', value: '$95,000' },
        { id: 24, company: 'Cloud Enterprises', status: 'Initial Contact', value: '$80,000' },
        { id: 25, company: 'Smart Enterprises', status: 'Qualified', value: '$90,000' }
      ]
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Leads Management</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Employees List */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">Sales Team</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {employees.map((employee) => (
              <div
                key={employee.id}
                onClick={() => setSelectedEmployee(employee)}
                className={`p-4 cursor-pointer hover:bg-gray-50 ${
                  selectedEmployee?.id === employee.id ? 'bg-blue-50' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{employee.name}</h3>
                    <p className="text-sm text-gray-500">{employee.position}</p>
                  </div>
                  <span className="text-sm text-gray-500">
                    {employee.leads.length} Leads
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lead Details */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">
              {selectedEmployee ? `${selectedEmployee.name}'s Leads` : 'Select an Employee'}
            </h2>
          </div>
          {selectedEmployee ? (
            <div className="p-4">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {selectedEmployee.leads.map((lead) => (
                    <tr key={lead.id}>
                      <td className="px-6 py-4 whitespace-nowrap">{lead.company}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          lead.status === 'Closed Won' ? 'bg-green-100 text-green-800' :
                          lead.status === 'Negotiation' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {lead.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">{lead.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-8 text-center text-gray-500">
              Select an employee to view their leads
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Leads;