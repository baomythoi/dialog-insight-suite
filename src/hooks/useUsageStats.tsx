
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';

interface UsageStats {
  id: string;
  channel_id: string;
  message_count: number;
  date: string;
  channels?: {
    type: string;
    name: string;
  };
}

interface UserQuota {
  id: string;
  monthly_message_limit: number;
  current_month_usage: number;
  quota_reset_date: string;
}

export const useUsageStats = () => {
  const { user } = useAuth();
  const [usageStats, setUsageStats] = useState<UsageStats[]>([]);
  const [userQuota, setUserQuota] = useState<UserQuota | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchUsageStats();
      fetchUserQuota();
    } else {
      setUsageStats([]);
      setUserQuota(null);
      setLoading(false);
    }
  }, [user]);

  const fetchUsageStats = async () => {
    if (!user) return;

    const { data, error } = await supabase
      .from('usage_stats')
      .select(`
        *,
        channels (
          type,
          name
        )
      `)
      .eq('user_id', user.id)
      .order('date', { ascending: false });

    if (error) {
      console.error('Error fetching usage stats:', error);
    } else {
      setUsageStats(data || []);
    }
  };

  const fetchUserQuota = async () => {
    if (!user) return;

    const { data, error } = await supabase
      .from('user_quotas')
      .select('*')
      .eq('user_id', user.id)
      .single();

    if (error) {
      console.error('Error fetching user quota:', error);
    } else {
      setUserQuota(data);
    }
    setLoading(false);
  };

  return {
    usageStats,
    userQuota,
    loading,
    refetchUsageStats: fetchUsageStats,
    refetchUserQuota: fetchUserQuota
  };
};
