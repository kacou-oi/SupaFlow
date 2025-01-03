import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('VITE_SUPABASE_URL and VITE_SUPABASE_KEY must be defined as environment variables.');
}

export function getSupabaseClient() {
  return createClient(supabaseUrl, supabaseKey);
}
