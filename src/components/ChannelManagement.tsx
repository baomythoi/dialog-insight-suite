
import React, { useState } from 'react';
import { Plus, Facebook, Instagram, MessageSquare, Globe, Settings, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';

const ChannelManagement = () => {
  const [channels, setChannels] = useState([
    {
      id: 1,
      type: 'facebook',
      name: 'Facebook Page',
      status: 'connected',
      messages: 1250,
      lastActivity: '2 giờ trước'
    },
    {
      id: 2,
      type: 'zalo',
      name: 'Zalo OA',
      status: 'connected',
      messages: 890,
      lastActivity: '5 giờ trước'
    }
  ]);

  const [showAddDialog, setShowAddDialog] = useState(false);
  const [newChannel, setNewChannel] = useState({
    type: '',
    name: '',
    token: ''
  });

  const channelTypes = [
    { id: 'facebook', name: 'Facebook Messenger', icon: Facebook, color: 'bg-blue-600' },
    { id: 'instagram', name: 'Instagram', icon: Instagram, color: 'bg-pink-600' },
    { id: 'zalo', name: 'Zalo', icon: MessageSquare, color: 'bg-blue-500' },
    { id: 'webchat', name: 'Web Chat', icon: Globe, color: 'bg-green-600' }
  ];

  const getChannelIcon = (type: string) => {
    const channel = channelTypes.find(c => c.id === type);
    return channel ? channel.icon : MessageSquare;
  };

  const getChannelColor = (type: string) => {
    const channel = channelTypes.find(c => c.id === type);
    return channel ? channel.color : 'bg-gray-600';
  };

  const handleAddChannel = () => {
    if (newChannel.type && newChannel.name && newChannel.token) {
      setChannels([...channels, {
        id: Date.now(),
        type: newChannel.type,
        name: newChannel.name,
        status: 'connected',
        messages: 0,
        lastActivity: 'Vừa kết nối'
      }]);
      setNewChannel({ type: '', name: '', token: '' });
      setShowAddDialog(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Quản lý kênh</h1>
        <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-primary-600">
              <Plus className="w-4 h-4 mr-2" />
              Thêm kênh mới
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Thêm kênh chat mới</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Loại kênh</label>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {channelTypes.map((type) => {
                    const Icon = type.icon;
                    return (
                      <button
                        key={type.id}
                        onClick={() => setNewChannel({...newChannel, type: type.id})}
                        className={`p-3 border-2 rounded-lg flex items-center gap-2 text-sm ${
                          newChannel.type === type.id 
                            ? 'border-primary bg-primary-50' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        {type.name}
                      </button>
                    );
                  })}
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium">Tên kênh</label>
                <Input
                  placeholder="Nhập tên kênh"
                  value={newChannel.name}
                  onChange={(e) => setNewChannel({...newChannel, name: e.target.value})}
                  className="mt-1"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium">API Token</label>
                <Input
                  placeholder="Nhập API token"
                  type="password"
                  value={newChannel.token}
                  onChange={(e) => setNewChannel({...newChannel, token: e.target.value})}
                  className="mt-1"
                />
              </div>
              
              <Button onClick={handleAddChannel} className="w-full bg-primary hover:bg-primary-600">
                Kết nối kênh
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Channel List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {channels.map((channel) => {
          const Icon = getChannelIcon(channel.type);
          const colorClass = getChannelColor(channel.type);
          
          return (
            <Card key={channel.id} className="relative">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 ${colorClass} rounded-lg flex items-center justify-center`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{channel.name}</CardTitle>
                      <Badge variant={channel.status === 'connected' ? 'default' : 'secondary'} className="mt-1">
                        {channel.status === 'connected' ? 'Đang kết nối' : 'Ngắt kết nối'}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="sm">
                      <Settings className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tin nhắn trong tháng:</span>
                    <span className="font-medium">{channel.messages.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Hoạt động cuối:</span>
                    <span className="font-medium">{channel.lastActivity}</span>
                  </div>
                  <div className="pt-2 border-t">
                    <Button variant="outline" size="sm" className="w-full">
                      Xem chi tiết
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Setup Guide */}
      <Card>
        <CardHeader>
          <CardTitle>Hướng dẫn kết nối kênh</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2">Facebook Messenger</h4>
              <p className="text-sm text-gray-600 mb-2">
                1. Truy cập Facebook Developers<br/>
                2. Tạo ứng dụng và lấy Page Access Token<br/>
                3. Dán token vào form trên
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Zalo OA</h4>
              <p className="text-sm text-gray-600 mb-2">
                1. Đăng ký Zalo Official Account<br/>
                2. Lấy Access Token từ Zalo Developers<br/>
                3. Kết nối với hệ thống
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChannelManagement;
