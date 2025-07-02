
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bell, Globe } from 'lucide-react';
import { useProfile } from '@/hooks/useProfile';
import { useLanguage } from '@/contexts/LanguageContext';

const TopBar = () => {
  const { profile } = useProfile();
  const { language, setLanguage, t } = useLanguage();
  const navigate = useNavigate();
  
  const handleUpgradeClick = () => {
    navigate('/upgrade');
  };

  const toggleLanguage = () => {
    setLanguage(language === 'vi' ? 'en' : 'vi');
  };

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
            {t('topbar.daysLeft').replace('{days}', String(profile?.trial_days_remaining || 0))}{' '}
            <button 
              onClick={handleUpgradeClick}
              className="text-primary hover:underline"
            >
              {t('topbar.upgradeNow')}
            </button>
          </span>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Bell className="w-5 h-5 text-gray-600" />
          </button>
          
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2 hover:bg-gray-200 transition-colors"
          >
            <Globe className="w-4 h-4 text-gray-600" />
            <span className="text-sm text-gray-700">
              {language === 'vi' ? t('topbar.vietnamese') : t('topbar.english')}
            </span>
          </button>
          
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
