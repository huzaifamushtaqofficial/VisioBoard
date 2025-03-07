import React from "react";
import { FaHistory, FaBolt, FaEye, FaRocket } from "react-icons/fa";

const Layout = () => {
  return (
    <div id="layout" className="min-h-screen bg-white text-black p-6 md:p-10">
      {/* Header */}
      <header className="text-2xl md:text-3xl font-bold text-center">
        Documentation you will <span className="text-primary italic">enjoy</span> creating
      </header>

      {/* Description */}
      <p className="text-center mt-4 text-md md:text-lg text-gray-700">
        Eraser has the best qualities of polished modern software without pesky distractions
        that can throw you off the rails. Maintain flow and focus with a minimal tool design.
      </p>

      {/* Icons Section */}
      <div className="mt-10 flex justify-center">
        <div className="p-6 bg-gray-100 rounded-lg shadow-md w-full md:w-1/2">
          <h2 className="text-lg font-semibold mb-2">Batteries included</h2>
          <p className="text-gray-600">Never go hunting for another AWS icon.</p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-4">
            {[...Array(18)].map((_, index) => (
              <div key={index} className="w-10 h-10 bg-gray-300 rounded"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
          <p className="font-semibold">Keyboard first</p>
          <p className="text-gray-600">Work at the speed of thought with shortcuts.</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
          <p className="font-semibold">Color Styling</p>
          <p className="text-gray-600">Beautiful styles to impress your boss and team.</p>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-4 text-gray-600 text-sm">
        <div className="flex items-center gap-2"><FaHistory /> Version history - Automatically saved snapshots</div>
        <div className="flex items-center gap-2"><FaBolt /> Performance - No clutter, no spinners, stay focused</div>
        <div className="flex items-center gap-2"><FaEye /> No flickering - Stay focused on your work</div>
        <div className="flex items-center gap-2"><FaRocket /> 3K - A new powerful way coming soon</div>
      </div>
    </div>
  );
};

export default Layout;