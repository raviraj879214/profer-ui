"use client";
import React, { useState } from "react";

const Settings = () => {
  const settingsTabs = ["General Settings", "Notifications", "Security", "Admin Access"];
  const [activeTab, setActiveTab] = useState("General Settings");

  // Tab content renderer
  const renderTabContent = () => {
    switch (activeTab) {
      case "General Settings":
        return (
          <>
            <h3 className="text-lg font-semibold mb-1">General Settings</h3>
            <p className="text-sm text-gray-500 mb-4">
              Configure basic application settings and preferences
            </p>
            <form className="space-y-4 max-w-lg">
              <div>
                <label className="block text-sm font-medium text-gray-700">Company Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  placeholder="Profer Admin"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Timezone</label>
                <select className="mt-1 block w-full border border-gray-300 rounded-md p-2">
                  <option>UTC</option>
                  <option>IST</option>
                  <option>EST</option>
                  <option>PST</option>
                </select>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              >
                Save Changes
              </button>
            </form>
          </>
        );
      case "Notifications":
        return (
          <>
            <h3 className="text-lg font-semibold mb-1">Notification Settings</h3>
            <p className="text-sm text-gray-500 mb-4">
              Manage your notification preferences
            </p>
            <div className="space-y-4">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" />
                <span>Email alerts for new projects</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" />
                <span>Push notifications for bidding updates</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" />
                <span>Weekly summary via email</span>
              </label>
            </div>
          </>
        );
      case "Security":
        return (
          <>
            <h3 className="text-lg font-semibold mb-1">Security Settings</h3>
            <p className="text-sm text-gray-500 mb-4">
              Update your password and secure your account
            </p>
            <form className="space-y-4 max-w-lg">
              <div>
                <label className="block text-sm font-medium text-gray-700">Current Password</label>
                <input
                  type="password"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">New Password</label>
                <input
                  type="password"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
                <input
                  type="password"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              >
                Update Password
              </button>
            </form>
          </>
        );
      case "Admin Access":
        return (
          <>
            <h3 className="text-lg font-semibold mb-1">Admin Access</h3>
            <p className="text-sm text-gray-500 mb-4">
              Manage administrative access for other users
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-between border p-3 rounded-md bg-gray-50">
                <div>
                  <div className="font-medium">admin@proferadmin.com</div>
                  <div className="text-xs text-gray-500">Full Admin Access</div>
                </div>
                <button className="text-sm text-red-500 hover:underline">Revoke</button>
              </div>
              <button className="text-sm text-blue-600 hover:underline">+ Add New Admin</button>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Main Content */}
        <main className="flex-1 bg-white p-8">
          <h2 className="text-2xl font-semibold mb-6">Settings</h2>

          <div className="flex">
            {/* Tabs */}
            <div className="w-60 border-r pr-6">
              {settingsTabs.map((tab) => (
                <div
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-2 px-4 text-sm rounded cursor-pointer mb-1 ${
                    activeTab === tab
                      ? "bg-blue-100 text-blue-600 font-medium"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {tab}
                </div>
              ))}
            </div>

            {/* Dynamic Content */}
            <div className="flex-1 pl-6">
              {renderTabContent()}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Settings;
