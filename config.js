const supabaseUrl = 'https://pfzxcukixwflfxxtxmvp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmenhjdWtpeHdmbGZ4eHR4bXZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU3MjM5ODYsImV4cCI6MjA1MTI5OTk4Nn0.IeWlfZQvCp7HMBNoPflJXvFi68ZvXribMzrivpZnMcU';

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';

export function getSupabaseClient() {
  return createClient(supabaseUrl, supabaseKey);
}
