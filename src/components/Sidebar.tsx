
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User, MessageSquare, Settings, BarChart3, Upload, Calendar, FileText, Users, CreditCard, LogOut, Home } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

const Sidebar = () => {
  const location = useLocation();
  const { signOut } = useAuth();
  
  const menuItems = [{
    icon: Home,
    label: 'Trang chủ',
    path: '/dashboard'
  }, {
    icon: User,
    label: 'Thông tin cá nhân',
    path: '/profile'
  }, {
    icon: MessageSquare,
    label: 'Đào tạo chatbot',
    path: '/chatbot'
  }, {
    icon: Users,
    label: 'Quản lý kênh',
    path: '/messages'
  }, {
    icon: Upload,
    label: 'Lịch sử giao dịch',
    path: '/transactions'
  }, {
    icon: CreditCard,
    label: 'Nâng cấp',
    path: '/upgrade'
  }, {
    icon: Settings,
    label: 'Cài đặt',
    path: '/settings'
  }];
  
  const isActive = (path: string) => {
    if (path === '/dashboard' && location.pathname === '/dashboard') return true;
    return location.pathname.startsWith(path) && path !== '/dashboard';
  };
  
  const handleSignOut = () => {
    signOut();
  };
  
  return (
    <div className="w-64 bg-sidebar h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-sidebar-border">
        <Link to="/" className="flex items-center gap-3">
          <img 
            src="/lovable-uploads/7e285b94-c226-4703-b0a3-d7c518b47094.png" 
            alt="AIGEN Logo" 
            className="w-8 h-8 object-contain"
          />
          <span className="text-white text-xl font-bold">AI GEN</span>
        </Link>
      </div>

      {/* Workspace selector */}
      <div className="p-4 border-b border-sidebar-border">
        <div className="flex items-center gap-3 text-white">
          <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
            <User className="w-4 h-4" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium">Phuong-workspace</div>
            <div className="flex items-center gap-1 text-xs text-gray-300">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              Phuong
            </div>
          </div>
        </div>
      </div>

      {/* Menu items */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map(item => {
            const Icon = item.icon;
            return (
              <li key={item.path}>
                <Link 
                  to={item.path} 
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                    isActive(item.path) 
                      ? 'bg-primary text-white' 
                      : 'text-gray-300 hover:bg-sidebar-accent hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-sidebar-border">
        <button 
          onClick={handleSignOut}
          className="flex items-center gap-3 px-3 py-2 text-red-400 hover:bg-red-500/10 rounded-lg text-sm transition-colors w-full"
        >
          <LogOut className="w-4 h-4" />
          Đăng xuất
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
