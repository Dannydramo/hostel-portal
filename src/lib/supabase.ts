import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabase: SupabaseClient = createClient(
  import.meta.env.VITE_PUBLIC_SUPABASE_URL,
  import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY
);
export default supabase;
