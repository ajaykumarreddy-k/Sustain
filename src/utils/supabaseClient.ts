import { createClient } from '@supabase/supabase-js';
import type { SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

const isConfigured = Boolean(supabaseUrl && supabaseAnonKey);

if (!isConfigured) {
  console.error(
    '[Sustain] Critical Error: Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY.\n' +
    'The application will not be able to authenticate or fetch data until these environment variables are set.\n' +
    'Check your .env file or Vercel Project Settings.'
  );
}

// We initialize even if missing to prevent export errors, but AuthContext will handle the null state.
export const supabase: SupabaseClient = isConfigured
  ? createClient(supabaseUrl!, supabaseAnonKey!)
  : (null as unknown as SupabaseClient);
