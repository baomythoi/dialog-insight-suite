
-- Create a table for FAQ entries
CREATE TABLE public.faq_items (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users NOT NULL,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  category TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security (RLS) to ensure users can only see their own FAQ items
ALTER TABLE public.faq_items ENABLE ROW LEVEL SECURITY;

-- Create policy that allows users to SELECT their own FAQ items
CREATE POLICY "Users can view their own faq_items" 
  ON public.faq_items 
  FOR SELECT 
  USING (auth.uid() = user_id);

-- Create policy that allows users to INSERT their own FAQ items
CREATE POLICY "Users can create their own faq_items" 
  ON public.faq_items 
  FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

-- Create policy that allows users to UPDATE their own FAQ items
CREATE POLICY "Users can update their own faq_items" 
  ON public.faq_items 
  FOR UPDATE 
  USING (auth.uid() = user_id);

-- Create policy that allows users to DELETE their own FAQ items
CREATE POLICY "Users can delete their own faq_items" 
  ON public.faq_items 
  FOR DELETE 
  USING (auth.uid() = user_id);
