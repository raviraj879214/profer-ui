"use client"
import { useState } from "react";



const stats = [
  { title: 'Companies Pending Verification', value: 27, change: '+12%' },
  { title: 'Active Projects', value: 124, change: '+8%' },
  { title: 'Completed Projects', value: 368, change: '+15%' },
  { title: 'Total Revenue', value: '$42,850', change: '+22%' },
];

const verificationRequests = [
  {
    company: 'Apex Roofing Solutions',
    location: 'Austin, TX',
    date: 'Mar 18, 2025',
    status: 'Pending',
  },
  {
    company: 'SkyHigh Contractors',
    location: 'Denver, CO',
    date: 'Mar 17, 2025',
    status: 'Pending',
  },
  {
    company: 'TopTier Roofing Inc',
    location: 'Seattle, WA',
    date: 'Mar 15, 2025',
    status: 'Pending',
  },
];



export function AdminDashboard() {

      const [activeNav, setActiveNav] = useState('Dashboard');
  const [activeTab, setActiveTab] = useState('Verification Queue');


  return (
      <main className="flex-1 p-6 overflow-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

          {/* Stats cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {stats.map(({ title, value, change }) => (
              <div
                key={title}
                className="bg-white rounded-lg shadow border p-5 flex flex-col justify-between"
              >
                <p className="text-gray-500 text-sm">{title}</p>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-2xl font-bold">{value}</p>
                  <p className="text-green-500 font-semibold flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                    </svg>
                    {change}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-lg shadow border">
            <div className="border-b border-gray-200 px-6">
              <nav className="flex space-x-8 -mb-px">
                {['Verification Queue', 'Recent Activity', 'Platform Analytics'].map(
                  (tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                        activeTab === tab
                          ? 'border-blue-600 text-blue-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {tab}
                    </button>
                  )
                )}
              </nav>
            </div>

            {/* Tab Panels */}
            <div className="p-6 overflow-x-auto">
              {activeTab === 'Verification Queue' && (
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Company Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Location
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Submission Date
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {verificationRequests.map(({ company, location, date, status }) => (
                      <tr key={company}>
                        <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-900">
                          {company}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-500">{location}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-500">{date}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex rounded-full bg-yellow-100 px-2 text-xs font-semibold leading-5 text-yellow-800">
                            {status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-blue-600 cursor-pointer hover:underline">
                          Review
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td
                        colSpan={5}
                        className="px-6 py-4 whitespace-nowrap text-right text-sm text-blue-600 cursor-pointer hover:underline"
                      >
                        View all verification requests &rarr;
                      </td>
                    </tr>
                  </tfoot>
                </table>
              )}




              {activeTab === 'Recent Activity' && (
                <p className="text-gray-500">Recent activity content goes here.</p>
              )}

              {activeTab === 'Platform Analytics' && (
                <p className="text-gray-500">Platform analytics content goes here.</p>
              )}








            </div>
          </div>
        </main>

  );
}
