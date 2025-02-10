import React, { useState } from 'react';
import { 
  Search, 
  Inbox, 
  CheckSquare, 
  Briefcase, 
  Building2, 
  Users, 
  MoreHorizontal,
  Box,
  GitBranch,
  Headphones,
  Gauge,
  Users2,
  Shield,
  Star,
  Menu,
  X
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-30
        w-64 h-screen bg-white border-r border-gray-200 
        transform transition-transform duration-200 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        flex flex-col
      `}>
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
              <span className="text-purple-600 font-semibold">ZB</span>
            </div>
            <div className="flex-1">
              <h2 className="text-sm font-semibold">Zara Bennett</h2>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="lg:hidden p-1 hover:bg-gray-100 rounded-md"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="p-2">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-9 pr-4 py-2 bg-gray-100 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          <nav className="px-2 py-2">
            <div className="space-y-1">
              <NavItem icon={<Inbox />} label="Inbox" count="46" />
              <NavItem icon={<CheckSquare />} label="Tasks" />
              <NavItem icon={<Briefcase />} label="Deals" active />
              <NavItem icon={<Building2 />} label="Companies" count="18" />
              <NavItem icon={<Users />} label="People" count="12" />
              <NavItem icon={<MoreHorizontal />} label="More" />
            </div>

            <div className="mt-8">
              <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Collections
              </h3>
              <div className="mt-2 space-y-1">
                <NavItem icon={<Star className="text-yellow-400" />} label="Products" />
                <NavItem icon={<GitBranch />} label="My deals flow" />
                <NavItem icon={<Headphones />} label="Support" />
                <NavItem icon={<Gauge />} label="Sales" />
                <NavItem icon={<Box />} label="Operations" />
                <NavItem icon={<Users2 />} label="Partner team" />
                <NavItem icon={<Shield />} label="Quality" />
              </div>
            </div>
          </nav>
        </div>

        <div className="p-4 border-t border-gray-200">
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm text-gray-600">Your trial end soon!</p>
            <p className="text-xs text-gray-500 mt-1">Upgrade to team to get latest exclusive features</p>
            <button className="mt-3 w-full px-4 py-2 bg-purple-600 text-white rounded-md text-sm font-medium hover:bg-purple-700 transition-colors">
              Upgrade plan
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const NavItem = ({ icon, label, count, active = false }: { icon: React.ReactNode; label: string; count?: string; active?: boolean }) => {
  return (
    <a
      href="#"
      className={`flex items-center px-3 py-2 text-sm rounded-md ${
        active
          ? 'bg-purple-50 text-purple-700'
          : 'text-gray-700 hover:bg-gray-100'
      }`}
    >
      <span className="w-5 h-5">{icon}</span>
      <span className="ml-3 flex-1">{label}</span>
      {count && (
        <span className="text-xs text-gray-500">{count}</span>
      )}
    </a>
  );
};

export default Sidebar;