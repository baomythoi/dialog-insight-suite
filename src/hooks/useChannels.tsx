
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';

interface Channel {
  id: string;
  type: string;
  name: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export const useChannels = () => {
  const { user } = useAuth();
  const [channels, setChannels] = useState<Channel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchChannels();
    } else {
      setChannels([]);
      setLoading(false);
    }
  }, [user]);

  const fetchChannels = async () => {
    if (!user) return;

    const { data, error } = await supabase
      .from('channels')
      .select('*')
      .eq('user_id', user.id);

    if (error) {
      console.error('Error fetching channels:', error);
    } else {
      setChannels(data || []);
    }
    setLoading(false);
  };

  return {
    channels,
    loading,
    refetchChannels: fetchChannels
  };
};
