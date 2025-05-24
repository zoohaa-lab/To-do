import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kfmkonyubhdnnwwxruxv.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtmbWtvbnl1Ymhkbm53d3hydXh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc5MzEzOTgsImV4cCI6MjA2MzUwNzM5OH0.75-APLRKBbr3u7EX0xDh-TKdYx_jUWJOwtWeoCmL7cE';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
