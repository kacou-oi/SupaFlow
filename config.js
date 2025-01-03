import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
import { supabaseUrl, supabaseKey } from './config/env.js';

export function getSupabaseClient() {
  return createClient(supabaseUrl, supabaseKey);
}
