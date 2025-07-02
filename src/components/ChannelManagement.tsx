
import React, { useState } from 'react';
import { Plus, Facebook, Instagram, MessageSquare, Globe, Settings, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { useChannels } from '@/hooks/useChannels';
import { useUsageStats } from '@/hooks/useUsageStats';

const ChannelManagement = () => {
  const { channels, loading: channelsLoading } = useChannels();
  const { usageStats, loading: statsLoading } = useUsageStats();
  const [showAddDialog, setShowAddDialog] = useState(false);

  const channelTypes = [{
    id: 'facebook',
    name: 'Facebook',
    icon: Facebook,
    color: 'bg-blue-600'
  }, {
    id: 'instagram',
    name: 'Instagram',
    icon: Instagram,
    color: 'bg-pink-600'
  }, {
    id: 'zalo',
    name: 'Zalo',
    icon: MessageSquare,
    color: 'bg-blue-500'
  }];

  const getChannelIcon = (type: string) => {
    const channel = channelTypes.find(c => c.id === type);
    return channel ? channel.icon : MessageSquare;
  };

  const getChannelColor = (type: string) => {
    const channel = channelTypes.find(c => c.id === type);
    return channel ? channel.color : 'bg-gray-600';
  };

  const getChannelStats = (channelId: string) => {
    const stats = usageStats.find(stat => stat.channel_id === channelId);
    return {
      messages: stats?.message_count || 0,
      lastActivity: stats?.date ? new Date(stats.date).toLocaleDateString('vi-VN') : 'Chưa có hoạt động'
    };
  };

  const handleChannelClick = (channelType: string) => {
    // Backend URLs will be provided later for each channel
    console.log(`Redirecting to ${channelType} backend URL`);
    setShowAddDialog(false);
  };

  if (channelsLoading || statsLoading) {
    return (
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Quản lý kênh</h1>
        </div>
        <div className="text-center py-8">
          <p className="text-gray-600">Đang tải dữ liệu...</p>
        </div>
      </div>
    );
  }

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
              <DialogTitle>Thêm kênh mới</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                {channelTypes.map(type => {
                  const Icon = type.icon;
                  return (
                    <button
                      key={type.id}
                      onClick={() => handleChannelClick(type.id)}
                      className="p-6 border-2 rounded-lg flex items-center justify-center gap-3 text-lg font-medium hover:border-primary hover:bg-primary-50 transition-colors"
                    >
                      <div className={`w-12 h-12 ${type.color} rounded-lg flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      {type.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Channel List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {channels.map(channel => {
          const Icon = getChannelIcon(channel.type);
          const colorClass = getChannelColor(channel.type);
          const stats = getChannelStats(channel.id);
          
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
                    <span className="font-medium">{stats.messages.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Hoạt động cuối:</span>
                    <span className="font-medium">{stats.lastActivity}</span>
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
        
        
      </Card>
    </div>
  );
};

export default ChannelManagement;
