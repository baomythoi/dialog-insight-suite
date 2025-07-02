
-- Create table for channels
CREATE TABLE public.channels (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('facebook', 'instagram', 'zalo', 'webchat')),
  name TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'connected' CHECK (status IN ('connected', 'disconnected')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create table for usage statistics
CREATE TABLE public.usage_stats (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users NOT NULL,
  channel_id UUID REFERENCES public.channels,
  message_count INTEGER NOT NULL DEFAULT 0,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, channel_id, date)
);

-- Create table for user quotas
CREATE TABLE public.user_quotas (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users NOT NULL UNIQUE,
  monthly_message_limit INTEGER NOT NULL DEFAULT 1000,
  current_month_usage INTEGER NOT NULL DEFAULT 0,
  quota_reset_date DATE NOT NULL DEFAULT (DATE_TRUNC('month', CURRENT_DATE) + INTERVAL '1 month')::DATE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security
ALTER TABLE public.channels ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.usage_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_quotas ENABLE ROW LEVEL SECURITY;

-- RLS policies for channels
CREATE POLICY "Users can view their own channels" 
  ON public.channels FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own channels" 
  ON public.channels FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own channels" 
  ON public.channels FOR UPDATE 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own channels" 
  ON public.channels FOR DELETE 
  USING (auth.uid() = user_id);

-- RLS policies for usage_stats
CREATE POLICY "Users can view their own usage stats" 
  ON public.usage_stats FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own usage stats" 
  ON public.usage_stats FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own usage stats" 
  ON public.usage_stats FOR UPDATE 
  USING (auth.uid() = user_id);

-- RLS policies for user_quotas
CREATE POLICY "Users can view their own quotas" 
  ON public.user_quotas FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own quotas" 
  ON public.user_quotas FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own quotas" 
  ON public.user_quotas FOR UPDATE 
  USING (auth.uid() = user_id);

-- Insert some sample data for existing users
INSERT INTO public.channels (user_id, type, name, status) 
SELECT id, 'facebook', 'Facebook Page', 'connected' FROM auth.users LIMIT 1;

INSERT INTO public.channels (user_id, type, name, status) 
SELECT id, 'zalo', 'Zalo OA', 'connected' FROM auth.users LIMIT 1;

-- Insert sample usage stats
INSERT INTO public.usage_stats (user_id, channel_id, message_count, date)
SELECT 
  c.user_id, 
  c.id, 
  CASE 
    WHEN c.type = 'facebook' THEN 1250
    WHEN c.type = 'zalo' THEN 890
    ELSE 500
  END,
  CURRENT_DATE
FROM public.channels c;

-- Insert sample quotas
INSERT INTO public.user_quotas (user_id, monthly_message_limit, current_month_usage)
SELECT id, 10000, 3210 FROM auth.users;
