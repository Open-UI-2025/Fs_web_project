import React from 'react';
import { 
  Table, 
  Filter, 
  ArrowUpDown, 
  Share2,
  Plus,
  Save,
  MoreHorizontal,
  Grid,
  Menu
} from 'lucide-react';

interface TopNavProps {
  onMenuClick: () => void;
}

const TopNav = ({ onMenuClick }: TopNavProps) => {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="px-4 lg:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button 
              onClick={onMenuClick}
              className="lg:hidden p-1.5 hover:bg-gray-100 rounded-md"
            >
              <Menu className="w-5 h-5" />
            </button>
            <h1 className="text-xl font-semibold">Deals</h1>
            <div className="hidden md:flex items-center space-x-2">
              <button className="flex items-center px-3 py-1.5 text-sm text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50">
                <Table className="w-4 h-4 mr-2" />
                Table
              </button>
              <button className="flex items-center px-3 py-1.5 text-sm text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </button>
              <button className="flex items-center px-3 py-1.5 text-sm text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50">
                <ArrowUpDown className="w-4 h-4 mr-2" />
                Sort
              </button>
              <button className="flex items-center px-3 py-1.5 text-sm text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50">
                <Share2 className="w-4 h-4 mr-2" />
                Shared
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="hidden sm:flex -space-x-2">
              <img
                className="w-8 h-8 rounded-full border-2 border-white"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
                alt="User"
              />
              <img
                className="w-8 h-8 rounded-full border-2 border-white"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                alt="User"
              />
              <img
                className="w-8 h-8 rounded-full border-2 border-white"
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop"
                alt="User"
              />
            </div>
            <button className="hidden md:flex items-center px-3 py-1.5 text-sm text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50">
              <Grid className="w-4 h-4 mr-2" />
              All apps
            </button>
            <button className="flex items-center px-3 py-1.5 text-sm bg-black text-white rounded-md hover:bg-gray-800">
              <Plus className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Add deal</span>
              <span className="sm:hidden">Add</span>
            </button>
            <button className="hidden md:flex items-center px-3 py-1.5 text-sm text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50">
              <Save className="w-4 h-4 mr-2" />
              Save as new view
            </button>
            <button className="p-1.5 text-gray-700 rounded-md hover:bg-gray-100">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;