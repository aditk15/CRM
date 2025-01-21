import { useState } from 'react';
import { ChartBarIcon, ArrowTrendingUpIcon, UserGroupIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

function Dashboard() {
  const [stats] = useState({
    totalLeads: 156,
    activeOpportunities: 23,
    completedTasks: 45,
    revenue: 125000,
  });

  return (
    <div className="p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-[#032D60]">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome back, Sales Representative</p>
      </header>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-600 font-medium">Total Leads</h3>
            <UserGroupIcon className="w-6 h-6 text-[#1B96FF]" />
          </div>
          <p className="text-3xl font-bold text-[#032D60]">{stats.totalLeads}</p>
          <p className="text-green-600 text-sm mt-2">↑ 12% from last month</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-600 font-medium">Active Opportunities</h3>
            <CurrencyDollarIcon className="w-6 h-6 text-[#1B96FF]" />
          </div>
          <p className="text-3xl font-bold text-[#032D60]">{stats.activeOpportunities}</p>
          <p className="text-green-600 text-sm mt-2">↑ 5% from last month</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-600 font-medium">Completed Tasks</h3>
            <ChartBarIcon className="w-6 h-6 text-[#1B96FF]" />
          </div>
          <p className="text-3xl font-bold text-[#032D60]">{stats.completedTasks}</p>
          <p className="text-green-600 text-sm mt-2">↑ 8% from last month</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-600 font-medium">Revenue</h3>
            <ArrowTrendingUpIcon className="w-6 h-6 text-[#1B96FF]" />
          </div>
          <p className="text-3xl font-bold text-[#032D60]">${stats.revenue.toLocaleString()}</p>
          <p className="text-green-600 text-sm mt-2">↑ 15% from last month</p>
        </div>
      </div>

      {/* Recent Activity & Pipeline */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold text-[#032D60] mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-start space-x-4 p-3 hover:bg-gray-50 rounded-lg">
                <div className="w-2 h-2 mt-2 rounded-full bg-[#1B96FF]" />
                <div>
                  <p className="font-medium text-gray-900">New lead created</p>
                  <p className="text-sm text-gray-500">Tech Corp Inc. - Enterprise Plan</p>
                  <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold text-[#032D60] mb-4">Sales Pipeline</h2>
          <div className="space-y-4">
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block text-[#032D60]">
                    Qualification
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-[#032D60]">
                    30%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                <div className="w-[30%] shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#1B96FF]"></div>
              </div>
            </div>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block text-[#032D60]">
                    Proposal
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-[#032D60]">
                    45%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                <div className="w-[45%] shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#1B96FF]"></div>
              </div>
            </div>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block text-[#032D60]">
                    Negotiation
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-[#032D60]">
                    25%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                <div className="w-[25%] shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#1B96FF]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;