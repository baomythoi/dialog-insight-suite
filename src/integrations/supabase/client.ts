// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://kosxrwztwvkrkyhbnqic.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtvc3hyd3p0d3Zrcmt5aGJucWljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAxNjY4NDgsImV4cCI6MjA2NTc0Mjg0OH0.C4D53Xd4tH4FZV3wIIH-mRxeYS1x4w2YYKH-OcH4qE8";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);