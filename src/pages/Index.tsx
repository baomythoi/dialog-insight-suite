import React from 'react';
import Sidebar from '@/components/Sidebar';
import TopBar from '@/components/TopBar';
import ProfilePage from '@/components/ProfilePage';
import ChannelManagement from '@/components/ChannelManagement';
import Analytics from '@/components/Analytics';
import DocumentManagement from '@/components/DocumentManagement';
import AuthPage from '@/components/AuthPage';
import { useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

const Index = () => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
          <p className="mt-4 text-gray-600">Đang tải...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <AuthPage />;
  }

  const renderContent = () => {
    switch (location.pathname) {
      case '/profile':
        return <ProfilePage />;
      case '/chatbot':
        return <DocumentManagement />;
      case '/messages':
        return <ChannelManagement />;
      case '/analytics':
        return <Analytics />;
      case '/transactions':
        return (
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Lịch sử giao dịch</h1>
            <div className="bg-white rounded-lg shadow p-6">
              <p className="text-gray-600">Chưa có giao dịch nào.</p>
            </div>
          </div>
        );
      case '/upgrade':
        return (
          <div className="max-w-4xl mx-auto">
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
                  <span className="text-3xl font-bold text-primary">299,000đ</span>
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
          </div>
        );
      case '/settings':
        return (
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Cài đặt</h1>
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
                      Đổi mật khẩu
                    </button>
                    <br />
                    <button className="text-primary hover:underline">
                      Xác thực 2 bước
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Chào mừng bạn trở lại! 👋
              </h1>
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
                    <p className="text-2xl font-bold text-gray-900">324</p>
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
                    <p className="text-2xl font-bold text-gray-900">3</p>
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
                    <p className="text-2xl font-bold text-gray-900">94.5%</p>
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
                    <p className="text-2xl font-bold text-primary">7</p>
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
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Facebook Messenger đã kết nối thành công</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">Đã cập nhật 5 FAQ mới</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm">Kịch bản "Đặt hàng" đã được kích hoạt</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-medium mb-4">Thống kê nhanh</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Facebook</span>
                    <span className="font-medium">1,250 tin nhắn</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Zalo</span>
                    <span className="font-medium">890 tin nhắn</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Instagram</span>
                    <span className="font-medium">650 tin nhắn</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Webchat</span>
                    <span className="font-medium">420 tin nhắn</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
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

export default Index;
