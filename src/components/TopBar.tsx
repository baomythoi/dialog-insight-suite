
import React from 'react';
import { Bell, Globe } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-gray-600 text-sm">
            Bạn còn <span className="font-semibold text-primary">7 ngày</span> sử dụng gói dùng thử.{' '}
            <button className="text-primary hover:underline">Nâng cấp ngay ↗</button>
          </span>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Bell className="w-5 h-5 text-gray-600" />
          </button>
          
          <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
            <Globe className="w-4 h-4 text-gray-600" />
            <span className="text-sm text-gray-700">Tiếng Việt</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
