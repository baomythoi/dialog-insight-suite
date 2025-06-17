
import React, { useState } from 'react';
import { Upload, Edit, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/hooks/useAuth';
import { useProfile } from '@/hooks/useProfile';

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { signOut, user } = useAuth();
  const { profile, updateProfile } = useProfile();
  const [formData, setFormData] = useState({
    full_name: profile?.full_name || '',
    email: profile?.email || ''
  });

  const handleSave = async () => {
    await updateProfile(formData);
    setIsEditing(false);
  };

  const handleSignOut = () => {
    signOut();
  };

  if (!profile) {
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Thông tin cá nhân</h1>
        <Button onClick={handleSignOut} variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
          <LogOut className="w-4 h-4 mr-2" />
          Đăng xuất
        </Button>
      </div>
      
      {/* Profile Picture */}
      <Card>
        <CardHeader>
          <CardTitle>Hình đại diện</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center">
              {profile.avatar_url ? (
                <img src={profile.avatar_url} alt="Avatar" className="w-24 h-24 rounded-full object-cover" />
              ) : (
                <Upload className="w-8 h-8 text-gray-500" />
              )}
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-3">
                Dung lượng file cho phép 720×720 pixel, cao nhất là 1MB
              </p>
              <Button className="bg-primary hover:bg-primary-600">
                Lưu thay đổi
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* User Details */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Chi tiết người dùng</CardTitle>
          <Button
            variant="outline"
            onClick={() => setIsEditing(!isEditing)}
            className="text-primary border-primary hover:bg-primary-50"
          >
            <Edit className="w-4 h-4 mr-2" />
            {isEditing ? 'Hủy' : 'Chỉnh sửa'}
          </Button>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tên</label>
              {isEditing ? (
                <Input
                  value={formData.full_name}
                  onChange={(e) => setFormData({...formData, full_name: e.target.value})}
                />
              ) : (
                <p className="text-gray-900">{profile.full_name || 'Chưa cập nhật'}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Gói dịch vụ</label>
              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                profile.plan_type === 'pro' ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-800'
              }`}>
                {profile.plan_type === 'pro' ? 'Pro' : 'Miễn phí'}
              </span>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">ID người dùng</label>
              <p className="text-gray-900 font-mono text-sm">{profile.id}</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Ngày dùng thử còn lại</label>
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                {profile.trial_days_remaining} ngày
              </span>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
              {isEditing ? (
                <Input
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  disabled
                />
              ) : (
                <p className="text-gray-900">{profile.email}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Ngày tạo</label>
              <span className="text-gray-900">
                {new Date(profile.created_at).toLocaleDateString('vi-VN')}
              </span>
            </div>
          </div>
          
          {isEditing && (
            <div className="mt-6 flex gap-3">
              <Button onClick={handleSave} className="bg-primary hover:bg-primary-600">
                Lưu thay đổi
              </Button>
              <Button variant="outline" onClick={() => setIsEditing(false)}>
                Hủy
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Company Information */}
      <Card>
        <CardHeader>
          <CardTitle>Thông tin công ty (Nếu bạn muốn xuất hóa đơn tài chính)</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">Chưa có thông tin công ty được cung cấp.</p>
          <Button variant="outline" className="mt-3">
            Thêm thông tin công ty
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;
