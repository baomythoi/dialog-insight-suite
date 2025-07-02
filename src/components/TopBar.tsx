
import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, Globe } from 'lucide-react';
import { useProfile } from '@/hooks/useProfile';

const TopBar = () => {
  const { profile } = useProfile();
  
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/7e285b94-c226-4703-b0a3-d7c518b47094.png" 
              alt="AIGEN Logo" 
              className="w-8 h-8 object-contain"
            />
            <span className="text-xl font-bold text-primary">AIGEN</span>
          </Link>
          <span className="text-gray-600 text-sm">
            Bạn còn <span className="font-semibold text-primary">{profile?.trial_days_remaining || 0} ngày</span> sử dụng gói dùng thử.{' '}
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
          
          {profile && (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">
                  {profile.full_name?.charAt(0) || profile.email?.charAt(0)}
                </span>
              </div>
              <span className="text-sm text-gray-700">{profile.full_name || profile.email}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
