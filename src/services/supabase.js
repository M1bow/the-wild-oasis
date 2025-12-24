import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://qgceffhfkwobtbrriysm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFnY2VmZmhma3dvYnRicnJpeXNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE2ODMxMjMsImV4cCI6MjA3NzI1OTEyM30.fBAHSdQP3A5A5IszallQ6bO-NnCRR6lW_qpyGSFpX_I";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
