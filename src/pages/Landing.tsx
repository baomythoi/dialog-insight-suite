
import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Users, BarChart3, Zap, ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Landing = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img 
                src="/lovable-uploads/7e285b94-c226-4703-b0a3-d7c518b47094.png" 
                alt="AI GEN Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-2xl font-bold text-primary">AI GEN</span>
            </Link>
            <Link to="/auth">
              <Button className="bg-primary hover:bg-primary-600 text-white px-6 py-2 rounded-lg font-medium">
                Đăng nhập
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-primary mb-6 leading-tight">
            AI GEN - Smartest AI 
            <span className="text-accent block"> Chatbot Ever</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Tạo và quản lý chatbot AI thông minh cho Facebook Messenger, Zalo, Instagram và website của bạn. 
            Tăng hiệu quả chăm sóc khách hàng với công nghệ AI tiên tiến.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/auth">
              <Button size="lg" className="bg-primary hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-medium">
                Bắt đầu miễn phí
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="px-8 py-3 border-primary text-primary hover:bg-primary hover:text-white rounded-lg font-medium">
              Xem demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Tính năng nổi bật
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              AI GEN cung cấp bộ công cụ hoàn chỉnh để tạo, quản lý và tối ưu hóa chatbot AI của bạn
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Đa nền tảng</h3>
              <p className="text-gray-600 leading-relaxed">
                Kết nối với Facebook Messenger, Zalo, Instagram, và tích hợp webchat cho website
              </p>
            </div>
            
            <div className="text-center p-8 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary">AI thông minh</h3>
              <p className="text-gray-600 leading-relaxed">
                Công nghệ AI tiên tiến hiểu ngữ cảnh và trả lời tự nhiên như con người
              </p>
            </div>
            
            <div className="text-center p-8 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Thống kê chi tiết</h3>
              <p className="text-gray-600 leading-relaxed">
                Theo dõi hiệu suất, phân tích dữ liệu khách hàng và tối ưu hóa chatbot
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Gói dịch vụ phù hợp với mọi nhu cầu
            </h2>
            <p className="text-gray-600">
              Bắt đầu miễn phí, nâng cấp khi cần thiết
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
              <h3 className="text-2xl font-bold mb-4 text-primary">Gói miễn phí</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-primary">0đ</span>
                <span className="text-gray-600">/tháng</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent" />
                  <span className="text-gray-600">1,000 tin nhắn/tháng</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent" />
                  <span className="text-gray-600">1 kênh chat</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent" />
                  <span className="text-gray-600">FAQ cơ bản</span>
                </li>
              </ul>
              <Link to="/auth" className="block">
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white rounded-lg font-medium">
                  Bắt đầu miễn phí
                </Button>
              </Link>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-accent relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-accent text-primary px-4 py-1 rounded-full text-sm font-medium">
                  Phổ biến
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Gói Pro</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-accent">599,000đ</span>
                <span className="text-gray-600">/tháng</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent" />
                  <span className="text-gray-600">Không giới hạn tin nhắn</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent" />
                  <span className="text-gray-600">Không giới hạn kênh</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent" />
                  <span className="text-gray-600">Kịch bản nâng cao</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent" />
                  <span className="text-gray-600">Phân tích chi tiết</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent" />
                  <span className="text-gray-600">Hỗ trợ 24/7</span>
                </li>
              </ul>
              <Link to="/auth" className="block">
                <Button className="w-full bg-accent hover:bg-accent-600 text-primary rounded-lg font-medium">
                  Bắt đầu dùng thử
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Sẵn sàng tạo chatbot AI của bạn?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Tham gia cùng hàng ngàn doanh nghiệp đã tin tưởng AI GEN để tự động hóa chăm sóc khách hàng
          </p>
          <Link to="/auth">
            <Button size="lg" className="bg-accent hover:bg-accent-600 text-primary px-8 py-3 rounded-lg font-medium">
              Bắt đầu miễn phí ngay
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img 
                src="/lovable-uploads/7e285b94-c226-4703-b0a3-d7c518b47094.png" 
                alt="AI GEN Logo" 
                className="w-8 h-8 object-contain"
              />
              <span className="text-xl font-bold text-primary">AI GEN</span>
            </Link>
            <p className="text-gray-600 text-sm">© 2025 AI GEN. Tất cả quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
