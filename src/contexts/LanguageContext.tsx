
import React, { createContext, useContext, useState } from 'react';

type Language = 'vi' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  vi: {
    // Navigation
    'nav.dashboard': 'Tổng quan',
    'nav.profile': 'Hồ sơ',
    'nav.chatbot': 'Chatbot',
    'nav.messages': 'Tin nhắn',
    'nav.analytics': 'Thống kê',
    'nav.transactions': 'Giao dịch',
    'nav.upgrade': 'Nâng cấp',
    'nav.settings': 'Cài đặt',
    
    // TopBar
    'topbar.daysLeft': 'Bạn còn {days} ngày sử dụng gói dùng thử.',
    'topbar.upgradeNow': 'Nâng cấp ngay ↗',
    'topbar.vietnamese': 'Tiếng Việt',
    'topbar.english': 'English',
    
    // Dashboard
    'dashboard.welcome': 'Chào mừng bạn trở lại!',
    'dashboard.description': 'Quản lý chatbot AI và theo dõi hiệu suất của bạn từ dashboard này.',
    'dashboard.todayMessages': 'Tin nhắn hôm nay',
    'dashboard.activeChannels': 'Kênh hoạt động',
    'dashboard.messagesRemaining': 'Số tin nhắn còn lại',
    'dashboard.daysRemaining': 'Ngày còn lại',
    'dashboard.recentActivity': 'Hoạt động gần đây',
    'dashboard.quickStats': 'Thống kê nhanh',
    'dashboard.connected': 'kết nối',
    'dashboard.disconnected': 'ngắt kết nối',
    'dashboard.messages': 'tin nhắn',
    
    // Analytics
    'analytics.title': 'Thống kê & Phân tích',
    'analytics.loading': 'Đang tải dữ liệu...',
    'analytics.messageTrend': 'Xu hướng tin nhắn (7 ngày qua)',
    'analytics.channelDistribution': 'Phân bố theo kênh',
    'analytics.timeDistribution': 'Phân bố theo giờ',
    'analytics.channelPerformance': 'Hiệu suất kênh',
    
    // Channel Management
    'channels.title': 'Quản lý kênh',
    'channels.description': 'Kết nối và quản lý các kênh truyền thông xã hội của bạn.',
    'channels.addChannel': 'Thêm kênh mới',
    'channels.connected': 'Đã kết nối',
    'channels.disconnected': 'Chưa kết nối',
    'channels.facebook': 'Facebook',
    'channels.zalo': 'Zalo',
    'channels.instagram': 'Instagram',
    'channels.webchat': 'Webchat',
    
    // Common
    'common.loading': 'Đang tải...',
    'common.noData': 'Chưa có dữ liệu',
    'common.error': 'Đã có lỗi xảy ra',
  },
  en: {
    // Navigation
    'nav.dashboard': 'Dashboard',
    'nav.profile': 'Profile',
    'nav.chatbot': 'Chatbot',
    'nav.messages': 'Messages',
    'nav.analytics': 'Analytics',
    'nav.transactions': 'Transactions',
    'nav.upgrade': 'Upgrade',
    'nav.settings': 'Settings',
    
    // TopBar
    'topbar.daysLeft': 'You have {days} days left in your trial.',
    'topbar.upgradeNow': 'Upgrade now ↗',
    'topbar.vietnamese': 'Tiếng Việt',
    'topbar.english': 'English',
    
    // Dashboard
    'dashboard.welcome': 'Welcome back!',
    'dashboard.description': 'Manage your AI chatbot and track performance from this dashboard.',
    'dashboard.todayMessages': 'Today\'s Messages',
    'dashboard.activeChannels': 'Active Channels',
    'dashboard.messagesRemaining': 'Messages Remaining',
    'dashboard.daysRemaining': 'Days Remaining',
    'dashboard.recentActivity': 'Recent Activity',
    'dashboard.quickStats': 'Quick Stats',
    'dashboard.connected': 'connected',
    'dashboard.disconnected': 'disconnected',
    'dashboard.messages': 'messages',
    
    // Analytics
    'analytics.title': 'Analytics & Statistics',
    'analytics.loading': 'Loading data...',
    'analytics.messageTrend': 'Message Trend (Last 7 days)',
    'analytics.channelDistribution': 'Distribution by Channel',
    'analytics.timeDistribution': 'Distribution by Time',
    'analytics.channelPerformance': 'Channel Performance',
    
    // Channel Management
    'channels.title': 'Channel Management',
    'channels.description': 'Connect and manage your social media channels.',
    'channels.addChannel': 'Add New Channel',
    'channels.connected': 'Connected',
    'channels.disconnected': 'Disconnected',
    'channels.facebook': 'Facebook',
    'channels.zalo': 'Zalo',
    'channels.instagram': 'Instagram',
    'channels.webchat': 'Webchat',
    
    // Common
    'common.loading': 'Loading...',
    'common.noData': 'No data available',
    'common.error': 'An error occurred',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('vi');

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
