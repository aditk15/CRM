import { useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';

function Tasks() {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: 'medium',
    status: 'pending'
  });

  const employees = [
    {
      id: 1,
      name: 'John Doe',
      position: 'Sales Representative',
      tasks: {
        completed: [
          { id: 1, title: 'Follow up with Tech Corp', dueDate: '2024-03-15', priority: 'high', status: 'completed' },
          { id: 2, title: 'Product demo for Acme Inc', dueDate: '2024-03-14', priority: 'medium', status: 'completed' },
          { id: 3, title: 'Sales report Q1', dueDate: '2024-03-10', priority: 'high', status: 'completed' },
          { id: 4, title: 'Team meeting notes', dueDate: '2024-03-08', priority: 'low', status: 'completed' },
          { id: 5, title: 'Client feedback collection', dueDate: '2024-03-05', priority: 'medium', status: 'completed' }
        ],
        pending: [
          { id: 6, title: 'Prepare proposal for Innovation Inc', dueDate: '2024-03-20', priority: 'medium', status: 'pending' },
          { id: 7, title: 'Market research report', dueDate: '2024-03-22', priority: 'high', status: 'pending' },
          { id: 8, title: 'Sales training workshop', dueDate: '2024-03-25', priority: 'medium', status: 'pending' },
          { id: 9, title: 'Customer survey analysis', dueDate: '2024-03-28', priority: 'low', status: 'pending' },
          { id: 10, title: 'Quarterly goals review', dueDate: '2024-03-30', priority: 'high', status: 'pending' }
        ],
        ongoing: [
          { id: 11, title: 'Client meeting with Global Solutions', dueDate: '2024-03-18', priority: 'high', status: 'ongoing' },
          { id: 12, title: 'Sales pipeline update', dueDate: '2024-03-19', priority: 'medium', status: 'ongoing' },
          { id: 13, title: 'Lead qualification process', dueDate: '2024-03-21', priority: 'high', status: 'ongoing' },
          { id: 14, title: 'Product knowledge session', dueDate: '2024-03-23', priority: 'medium', status: 'ongoing' },
          { id: 15, title: 'Client database update', dueDate: '2024-03-24', priority: 'low', status: 'ongoing' }
        ]
      }
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'Senior Sales Executive',
      tasks: {
        completed: [
          { id: 16, title: 'Quarterly report submission', dueDate: '2024-03-14', priority: 'medium', status: 'completed' },
          { id: 17, title: 'Team performance review', dueDate: '2024-03-12', priority: 'high', status: 'completed' },
          { id: 18, title: 'Sales strategy presentation', dueDate: '2024-03-10', priority: 'high', status: 'completed' },
          { id: 19, title: 'Client feedback session', dueDate: '2024-03-08', priority: 'medium', status: 'completed' },
          { id: 20, title: 'Training material preparation', dueDate: '2024-03-05', priority: 'low', status: 'completed' }
        ],
        pending: [
          { id: 21, title: 'New client presentation', dueDate: '2024-03-22', priority: 'high', status: 'pending' },
          { id: 22, title: 'Budget planning 2024', dueDate: '2024-03-25', priority: 'high', status: 'pending' },
          { id: 23, title: 'Team building event', dueDate: '2024-03-28', priority: 'medium', status: 'pending' },
          { id: 24, title: 'Sales forecast report', dueDate: '2024-03-30', priority: 'high', status: 'pending' },
          { id: 25, title: 'Client retention strategy', dueDate: '2024-04-01', priority: 'medium', status: 'pending' }
        ],
        ongoing: [
          { id: 26, title: 'Contract negotiation', dueDate: '2024-03-19', priority: 'high', status: 'ongoing' },
          { id: 27, title: 'Sales team coaching', dueDate: '2024-03-20', priority: 'medium', status: 'ongoing' },
          { id: 28, title: 'Market expansion plan', dueDate: '2024-03-21', priority: 'high', status: 'ongoing' },
          { id: 29, title: 'Customer success program', dueDate: '2024-03-23', priority: 'medium', status: 'ongoing' },
          { id: 30, title: 'Product launch preparation', dueDate: '2024-03-24', priority: 'high', status: 'ongoing' }
        ]
      }
    },
    {
      id: 3,
      name: 'Michael Johnson',
      position: 'Account Executive',
      tasks: {
        completed: [
          { id: 31, title: 'Account review meeting', dueDate: '2024-03-13', priority: 'high', status: 'completed' },
          { id: 32, title: 'Sales presentation', dueDate: '2024-03-11', priority: 'medium', status: 'completed' },
          { id: 33, title: 'Client onboarding', dueDate: '2024-03-09', priority: 'high', status: 'completed' },
          { id: 34, title: 'Performance metrics review', dueDate: '2024-03-07', priority: 'medium', status: 'completed' },
          { id: 35, title: 'Team collaboration report', dueDate: '2024-03-04', priority: 'low', status: 'completed' }
        ],
        pending: [
          { id: 36, title: 'Strategic planning session', dueDate: '2024-03-21', priority: 'high', status: 'pending' },
          { id: 37, title: 'Client acquisition plan', dueDate: '2024-03-24', priority: 'medium', status: 'pending' },
          { id: 38, title: 'Sales methodology update', dueDate: '2024-03-27', priority: 'high', status: 'pending' },
          { id: 39, title: 'Territory mapping', dueDate: '2024-03-29', priority: 'medium', status: 'pending' },
          { id: 40, title: 'Competitive analysis', dueDate: '2024-03-31', priority: 'high', status: 'pending' }
        ],
        ongoing: [
          { id: 41, title: 'Lead generation campaign', dueDate: '2024-03-18', priority: 'high', status: 'ongoing' },
          { id: 42, title: 'Account management review', dueDate: '2024-03-20', priority: 'medium', status: 'ongoing' },
          { id: 43, title: 'Sales enablement program', dueDate: '2024-03-22', priority: 'high', status: 'ongoing' },
          { id: 44, title: 'Customer journey mapping', dueDate: '2024-03-24', priority: 'medium', status: 'ongoing' },
          { id: 45, title: 'Pipeline optimization', dueDate: '2024-03-25', priority: 'high', status: 'ongoing' }
        ]
      }
    },
    {
      id: 4,
      name: 'Sarah Wilson',
      position: 'Sales Manager',
      tasks: {
        completed: [
          { id: 46, title: 'Team performance analysis', dueDate: '2024-03-12', priority: 'high', status: 'completed' },
          { id: 47, title: 'Monthly sales report', dueDate: '2024-03-10', priority: 'medium', status: 'completed' },
          { id: 48, title: 'Training program review', dueDate: '2024-03-08', priority: 'high', status: 'completed' },
          { id: 49, title: 'Budget allocation', dueDate: '2024-03-06', priority: 'medium', status: 'completed' },
          { id: 50, title: 'Team meeting minutes', dueDate: '2024-03-03', priority: 'low', status: 'completed' }
        ],
        pending: [
          { id: 51, title: 'Annual strategy planning', dueDate: '2024-03-23', priority: 'high', status: 'pending' },
          { id: 52, title: 'Resource allocation review', dueDate: '2024-03-26', priority: 'medium', status: 'pending' },
          { id: 53, title: 'Performance improvement plan', dueDate: '2024-03-29', priority: 'high', status: 'pending' },
          { id: 54, title: 'Sales process optimization', dueDate: '2024-03-31', priority: 'medium', status: 'pending' },
          { id: 55, title: 'Team expansion planning', dueDate: '2024-04-02', priority: 'high', status: 'pending' }
        ],
        ongoing: [
          { id: 56, title: 'Sales team development', dueDate: '2024-03-19', priority: 'high', status: 'ongoing' },
          { id: 57, title: 'Process improvement project', dueDate: '2024-03-21', priority: 'medium', status: 'ongoing' },
          { id: 58, title: 'Team coaching sessions', dueDate: '2024-03-23', priority: 'high', status: 'ongoing' },
          { id: 59, title: 'KPI monitoring system', dueDate: '2024-03-25', priority: 'medium', status: 'ongoing' },
          { id: 60, title: 'Sales automation implementation', dueDate: '2024-03-26', priority: 'high', status: 'ongoing' }
        ]
      }
    },
    {
      id: 5,
      name: 'David Brown',
      position: 'Business Development Representative',
      tasks: {
        completed: [
          { id: 61, title: 'Lead qualification', dueDate: '2024-03-11', priority: 'high', status: 'completed' },
          { id: 62, title: 'Prospect research', dueDate: '2024-03-09', priority: 'medium', status: 'completed' },
          { id: 63, title: 'Email campaign results', dueDate: '2024-03-07', priority: 'high', status: 'completed' },
          { id: 64, title: 'Database cleanup', dueDate: '2024-03-05', priority: 'medium', status: 'completed' },
          { id: 65, title: 'Weekly activity report', dueDate: '2024-03-02', priority: 'low', status: 'completed' }
        ],
        pending: [
          { id: 66, title: 'Market research analysis', dueDate: '2024-03-22', priority: 'high', status: 'pending' },
          { id: 67, title: 'Lead nurturing strategy', dueDate: '2024-03-25', priority: 'medium', status: 'pending' },
          { id: 68, title: 'Outreach campaign planning', dueDate: '2024-03-28', priority: 'high', status: 'pending' },
          { id: 69, title: 'Prospect list development', dueDate: '2024-03-30', priority: 'medium', status: 'pending' },
          { id: 70, title: 'Sales tool evaluation', dueDate: '2024-04-01', priority: 'high', status: 'pending' }
        ],
        ongoing: [
          { id: 71, title: 'Lead generation activities', dueDate: '2024-03-18', priority: 'high', status: 'ongoing' },
          { id: 72, title: 'Social selling initiative', dueDate: '2024-03-20', priority: 'medium', status: 'ongoing' },
          { id: 73, title: 'Product training', dueDate: '2024-03-22', priority: 'high', status: 'ongoing' },
          { id: 74, title: 'CRM data management', dueDate: '2024-03-24', priority: 'medium', status: 'ongoing' },
          { id: 75, title: 'Sales pipeline building', dueDate: '2024-03-25', priority: 'high', status: 'ongoing' }
        ]
      }
    }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'ongoing': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const TaskList = ({ tasks, title, status }) => (
    <div className="mb-6">
      <h3 className="text-lg font-medium text-gray-900 mb-3">{title}</h3>
      <div className="space-y-3">
        {tasks.map((task) => (
          <div key={task.id} className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium text-gray-900">{task.title}</h4>
                <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
              </div>
              <div className="flex space-x-2">
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(task.priority)}`}>
                  {task.priority}
                </span>
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(task.status)}`}>
                  {task.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Tasks</h1>
        {selectedEmployee && (
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center"
          >
            <PlusIcon className="h-5 w-5 mr-2" />
            Assign Task
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Employees List */}
        <div className="lg:col-span-1">
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Employees</h2>
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
                  <h3 className="text-lg font-medium text-gray-900">{employee.name}</h3>
                  <p className="text-sm text-gray-500">{employee.position}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Task Details */}
        <div className="lg:col-span-2">
          {selectedEmployee ? (
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-bold mb-6">{selectedEmployee.name}'s Tasks</h2>
              <TaskList tasks={selectedEmployee.tasks.ongoing} title="Ongoing Tasks" status="ongoing" />
              <TaskList tasks={selectedEmployee.tasks.pending} title="Pending Tasks" status="pending" />
              <TaskList tasks={selectedEmployee.tasks.completed} title="Completed Tasks" status="completed" />
            </div>
          ) : (
            <div className="bg-white shadow rounded-lg p-8 text-center text-gray-500">
              Select an employee to view and manage their tasks
            </div>
          )}
        </div>
      </div>

      {/* Add Task Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h2 className="text-xl font-bold mb-4">Assign New Task to {selectedEmployee.name}</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={newTask.title}
                  onChange={(e) => setNewTask({...newTask, title: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  rows="3"
                  value={newTask.description}
                  onChange={(e) => setNewTask({...newTask, description: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Due Date</label>
                <input
                  type="date"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={newTask.dueDate}
                  onChange={(e) => setNewTask({...newTask, dueDate: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Priority</label>
                <select
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={newTask.priority}
                  onChange={(e) => setNewTask({...newTask, priority: e.target.value})}
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Status</label>
                <select
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={newTask.status}
                  onChange={(e) => setNewTask({...newTask, status: e.target.value})}
                >
                  <option value="pending">Pending</option>
                  <option value="ongoing">Ongoing</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
              <div className="flex justify-end space-x-4 mt-6">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Assign Task
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Tasks;