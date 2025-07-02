
import React from 'react';
import Sidebar from '@/components/Sidebar';
import TopBar from '@/components/TopBar';
import ProfilePage from '@/components/ProfilePage';
import ChannelManagement from '@/components/ChannelManagement';

import DocumentManagement from '@/components/DocumentManagement';
import PasswordChangeForm from '@/components/PasswordChangeForm';
import { useLocation } from 'react-router-dom';
import { useUsageStats } from '@/hooks/useUsageStats';
import { useChannels } from '@/hooks/useChannels';
import { useProfile } from '@/hooks/useProfile';

const Dashboard = () => {
  const location = useLocation();
  const { usageStats, userQuota, loading: statsLoading } = useUsageStats();
  const { channels, loading: channelsLoading } = useChannels();
  const { profile, loading: profileLoading } = useProfile();

  const renderContent = () => {
    switch (location.pathname) {
      case '/profile':
        return <ProfilePage />;
      case '/chatbot':
        return <DocumentManagement />;
      case '/messages':
        return <ChannelManagement />;
      case '/transactions':
        return <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Lịch sử giao dịch</h1>
            <div className="bg-white rounded-lg shadow p-6">
              <p className="text-gray-600">Chưa có giao dịch nào.</p>
            </div>
          </div>;
      case '/upgrade':
        return <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Nâng cấp gói dịch vụ</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow p-6 border-2 border-gray-200">
                <h3 className="text-xl font-bold mb-4">Gói miễn phí</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">0đ</span>
                  <span className="text-gray-600">/tháng</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li>✓ 1,000 tin nhắn/tháng</li>
                  <li>✓ 1 kênh chat</li>
                  <li>✓ FAQ cơ bản</li>
                </ul>
                <button className="w-full py-2 px-4 bg-gray-200 text-gray-700 rounded">
                  Gói hiện tại
                </button>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6 border-2 border-primary">
                <h3 className="text-xl font-bold mb-4">Gói Pro</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-primary">599,000đ</span>
                  <span className="text-gray-600">/tháng</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li>✓ Không giới hạn tin nhắn</li>
                  <li>✓ Không giới hạn kênh</li>
                  <li>✓ Kịch bản nâng cao</li>
                  <li>✓ Phân tích chi tiết</li>
                  <li>✓ Hỗ trợ 24/7</li>
                </ul>
                <button className="w-full py-2 px-4 bg-primary text-white rounded hover:bg-primary-600">
                  Nâng cấp ngay
                </button>
              </div>
            </div>
          </div>;
      case '/settings':
        return <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Cài đặt</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3">Cài đặt thông báo</h3>
                    <div className="space-y-3">
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" defaultChecked />
                        Thông báo tin nhắn mới
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" defaultChecked />
                        Thông báo cập nhật hệ thống
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3">Cài đặt bảo mật</h3>
                    <div className="space-y-3">
                      <button className="text-primary hover:underline">
                        Xác thực 2 bước
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <PasswordChangeForm />
            </div>
          </div>;
      default:
        // Dashboard home with real data
        if (statsLoading || channelsLoading || profileLoading) {
          return (
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Chào mừng bạn trở lại!</h1>
                <p className="text-gray-600">Đang tải dữ liệu...</p>
              </div>
            </div>
          );
        }

        const todayMessages = usageStats
          .filter(stat => stat.date === new Date().toISOString().split('T')[0])
          .reduce((sum, stat) => sum + stat.message_count, 0);

        const activeChannels = channels.filter(channel => channel.status === 'connected').length;
        const successRate = 94.5;
        const daysRemaining = profile?.trial_days_remaining || 0;

        return <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Chào mừng bạn trở lại! </h1>
              <p className="text-gray-600">
                Quản lý chatbot AI và theo dõi hiệu suất của bạn từ dashboard này.
              </p>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Tin nhắn hôm nay</p>
                    <p className="text-2xl font-bold text-gray-900">{todayMessages.toLocaleString()}</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    📨
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Kênh hoạt động</p>
                    <p className="text-2xl font-bold text-gray-900">{activeChannels}</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    🔗
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Tỷ lệ thành công</p>
                    <p className="text-2xl font-bold text-gray-900">{successRate}%</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    📊
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Ngày còn lại</p>
                    <p className="text-2xl font-bold text-primary">{daysRemaining}</p>
                  </div>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    ⏰
                  </div>
                </div>
              </div>
            </div>
            
            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-medium mb-4">Hoạt động gần đây</h3>
                <div className="space-y-3">
                  {channels.slice(0, 3).map((channel, index) => (
                    <div key={channel.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded">
                      <div className={`w-2 h-2 ${channel.status === 'connected' ? 'bg-green-500' : 'bg-red-500'} rounded-full`}></div>
                      <span className="text-sm">{channel.name} đã {channel.status === 'connected' ? 'kết nối' : 'ngắt kết nối'}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-medium mb-4">Thống kê nhanh</h3>
                <div className="space-y-4">
                  {channels.map(channel => {
                    const channelStats = usageStats.filter(stat => stat.channel_id === channel.id);
                    const totalMessages = channelStats.reduce((sum, stat) => sum + stat.message_count, 0);
                    
                    return (
                      <div key={channel.id} className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">{channel.name}</span>
                        <span className="font-medium">{totalMessages.toLocaleString()} tin nhắn</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex w-full">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopBar />
        <main className="flex-1 p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
