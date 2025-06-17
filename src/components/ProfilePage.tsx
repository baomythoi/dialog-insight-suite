
import React, { useState } from 'react';
import { Upload, Edit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Phuong',
    email: 'antoniodang269@gmail.com',
    phone: '0989456789',
    language: 'Tiếng Việt',
    status: 'Đang hoạt động',
    userId: '685168065fd1ef7237e709c7'
  });

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Thông tin cá nhân</h1>
      
      {/* Profile Picture */}
      <Card>
        <CardHeader>
          <CardTitle>Hình đại diện</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center">
              <Upload className="w-8 h-8 text-gray-500" />
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
                  value={profileData.name}
                  onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                />
              ) : (
                <p className="text-gray-900">{profileData.name}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Ngôn ngữ</label>
              <div className="flex items-center gap-2">
                <div className="w-6 h-4 bg-red-500 rounded-sm flex items-center justify-center">
                  <span className="text-white text-xs">🇻🇳</span>
                </div>
                <span className="text-gray-900">{profileData.language}</span>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">ID người dùng</label>
              <p className="text-gray-900 font-mono text-sm">{profileData.userId}</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Trạng thái</label>
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                {profileData.status}
              </span>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Mật khẩu</label>
              <div className="flex items-center justify-between">
                <span className="text-gray-900">••••••••</span>
                <Button variant="link" className="text-primary p-0">
                  Chỉnh sửa
                </Button>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
              {isEditing ? (
                <Input
                  value={profileData.email}
                  onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                />
              ) : (
                <p className="text-gray-900">{profileData.email}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Số điện thoại</label>
              <div className="flex items-center justify-between">
                <span className="text-gray-900">{profileData.phone}</span>
                <Button variant="link" className="text-primary p-0">
                  Chưa xác thực
                </Button>
              </div>
            </div>
          </div>
          
          {isEditing && (
            <div className="mt-6 flex gap-3">
              <Button className="bg-primary hover:bg-primary-600">
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
