import { createClient } from "@supabase/supabase-js";

const supabaseURL = "https://lyvkgllvbfsihontfrje.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5dmtnbGx2YmZzaWhvbnRmcmplIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg3NjcyMTUsImV4cCI6MjAwNDM0MzIxNX0.6wcloirqvWlGprx73giO6b0O4Fw1RBxbk8_SeBJ_cJ0";

export const supabase = createClient(supabaseURL, supabaseAnonKey)