import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
import * as dotenv from 'dotenv';
dotenv.config({ path: './config/.env' });

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('SUPABASE_URL and SUPABASE_KEY must be defined in the .env file.');
}

export function getSupabaseClient() {
  return createClient(supabaseUrl, supabaseKey);
}
